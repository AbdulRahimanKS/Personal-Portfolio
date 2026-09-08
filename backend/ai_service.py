import logging
import httpx
from typing import List, Dict, Optional
from config import GEMINI_API_KEY, GEMINI_MODEL

logger = logging.getLogger("portfolio.ai_service")

# Persona and context prompt for Abdul Rahiman
SYSTEM_PROMPT = """You are the official AI Assistant for Abdul Rahiman's professional portfolio.
Your role is to represent Abdul Rahiman accurately, professionally, and enthusiastically to potential employers, clients, recruiters, and visitors.

About Abdul Rahiman:
- **Title**: Python Developer & Full-Stack / AI Engineer
- **Current Organization**: Senscript Technologies
- **Experience Summary**: Specializes in building high-performance Python backends (FastAPI, Django, Flask), architecting REST APIs, designing relational/NoSQL databases, integrating modern AI/LLMs (Gemini, OpenAI, LangChain), and deploying robust cloud solutions (Azure, Docker).
- **Core Skills**:
  - Languages: Python, JavaScript, TypeScript, SQL, HTML5, CSS3
  - Back-End: FastAPI, Django, Flask, RESTful APIs, Celery, WebSockets
  - Front-End: React.js, Vite, Vanilla CSS / Tailwind CSS, Modern UI/UX
  - Databases: PostgreSQL, MySQL, SQLite, MongoDB, Redis
  - Cloud & DevOps: Microsoft Azure, Docker, Linux, Git/GitHub, CI/CD, Postman
  - AI & LLM: Google Gemini API, OpenAI API, LangChain, RAG architectures, Prompt Engineering
- **Key Projects Highlight**:
  1. **Employee Management System (EMS)**: Full-lifecycle enterprise staff & payroll management with granular role-based security.
  2. **eLearning Azure Solution**: Cloud-hosted learning platform with Azure integration, course management, and media delivery.
  3. **Multi-Vendor E-Commerce Platform**: High-concurrency store with multi-tenant vendor support, shopping cart, and payment gateway.
  4. **AI-Powered Smart Summarizer**: NLP document intelligence and contextual summarization using modern LLMs.
  5. **Healthcare Management Portal**: Patient records, appointment scheduling, and secure data handling.
  6. **Real-Time Chat Application**: Low-latency WebSocket messaging with channels, online status, and instant alerts.
  7. **Automated Invoicing & Billing System**: Dynamic PDF generation, payment status tracking, and automated client notifications.
  8. **Interactive Portfolio Website**: Custom-crafted portfolio with dark/light themes, live AI chatbot, and direct SMTP contact pipeline.
  9. **IoT Sensor Monitoring Dashboard**: Live telemetry streams, configurable threshold alerts, and real-time visualization.
- **Contact Details**:
  - Direct Email: rahimanks.abdul@gmail.com
  - Contact Form: Available on the /contact page of this portfolio.
  - Work Inquiries: Open to full-time developer positions, remote roles, high-impact freelance projects, and AI/Backend consulting.

Behavior Guidelines:
- Keep answers concise, clear, and easy to read using markdown (bullet points, bold text).
- Be polite, approachable, and confident about Abdul's skills.
- If asked about contacting or hiring Abdul, guide them to the Contact page or direct email (rahimanks.abdul@gmail.com).
- If asked an off-topic question unrelated to Abdul or software development, courteously bring the focus back to Abdul's work, tech stack, or projects.
- Never invent fictitious certifications or previous employers beyond what is specified above.
"""

# Fallback knowledge base for offline or missing API key scenarios
FALLBACK_RESPONSES = [
    {
        "keywords": ["senscript", "experience", "work", "job", "career", "company"],
        "reply": "💼 **Abdul Rahiman at Senscript Technologies**\n\nAbdul works as a **Python Developer** at Senscript Technologies, where he engineers scalable web applications, RESTful APIs (using FastAPI and Django), cloud infrastructure on Microsoft Azure, and real-time data solutions."
    },
    {
        "keywords": ["project", "portfolio", "built", "apps", "work"],
        "reply": "🚀 **Abdul's Featured Projects**\n\nAbdul has developed 9 diverse projects, including:\n- **Employee Management System (EMS)** (Enterprise Django & PostgreSQL)\n- **eLearning Azure Solution** (Cloud-hosted learning platform)\n- **Multi-Vendor E-Commerce Platform** (Scalable commerce engine)\n- **AI-Powered Smart Summarizer** (LLM-based document intelligence)\n- **Real-Time Chat App** (WebSocket-powered messaging)\n\nYou can explore all of these in detail on the **Projects** page!"
    },
    {
        "keywords": ["skill", "stack", "technology", "tech", "python", "react", "fastapi", "django"],
        "reply": "⚡ **Technical Expertise**\n\n- **Languages**: Python, JavaScript, TypeScript, SQL\n- **Back-End**: FastAPI, Django, Flask, REST APIs, Celery\n- **Front-End**: React.js, Vite, Modern CSS/UX\n- **Databases**: PostgreSQL, MySQL, SQLite, MongoDB\n- **Cloud & AI**: Microsoft Azure, Docker, Google Gemini, OpenAI, LangChain"
    },
    {
        "keywords": ["hire", "contact", "email", "reach", "talk", "message", "call", "freelance"],
        "reply": "📬 **Get in Touch with Abdul**\n\nAbdul is open to full-time roles, freelance collaborations, and tech consulting!\n- **Email**: [rahimanks.abdul@gmail.com](mailto:rahimanks.abdul@gmail.com)\n- **Portfolio Contact**: You can also use the message form on the **Contact** page."
    },
    {
        "keywords": ["about", "who is", "who are you", "bio", "intro", "hello", "hi", "hey"],
        "reply": "👋 **Hello! I'm Abdul Rahiman's AI Assistant.**\n\nAbdul is a **Python Developer & Full-Stack AI Engineer** at Senscript Technologies. He specializes in crafting resilient backends, modern web applications, and AI integrations.\n\nFeel free to ask me about his **experience at Senscript**, **top projects**, **tech stack**, or **how to contact him**!"
    }
]


def _get_fallback_reply(user_message: str) -> str:
    """Provides an intelligent contextual reply when Gemini API is not configured or unavailable."""
    msg_lower = user_message.lower()
    for item in FALLBACK_RESPONSES:
        if any(kw in msg_lower for kw in item["keywords"]):
            return item["reply"]

    return (
        "👋 **I am Abdul Rahiman's Portfolio Assistant!**\n\n"
        "Abdul is a **Python Developer** at **Senscript Technologies** specializing in FastAPI, Django, React, and AI integrations.\n\n"
        "You can ask me about:\n"
        "- 💼 **His Experience at Senscript Technologies**\n"
        "- 🚀 **His 9 Portfolio Projects**\n"
        "- ⚡ **Technical Skills & Tools**\n"
        "- 📬 **How to Contact or Hire Abdul**\n\n"
        "*(Tip: You can also reach him directly at [rahimanks.abdul@gmail.com](mailto:rahimanks.abdul@gmail.com) or via the Contact page!)*"
    )


async def generate_chat_reply(message: str, history: Optional[List[Dict[str, str]]] = None) -> str:
    """
    Generates a response to the user's message using Google Gemini 1.5 Flash.
    Falls back gracefully if the API key is missing or an error occurs.
    """
    cleaned_key = GEMINI_API_KEY.strip() if GEMINI_API_KEY else ""

    # If no key configured, use built-in smart knowledge engine
    if not cleaned_key or cleaned_key == "your_gemini_api_key_here":
        logger.info("Gemini API key not set; using smart fallback knowledge base.")
        return _get_fallback_reply(message)

    endpoint = f"https://generativelanguage.googleapis.com/v1beta/models/{GEMINI_MODEL}:generateContent?key={cleaned_key}"

    # Prepare chat history for Gemini API
    # Gemini expects: [{"role": "user" | "model", "parts": [{"text": "..."}]}]
    contents = []
    if history:
        for turn in history[-6:]:  # Keep recent context window compact
            role = "model" if turn.get("role") in ["assistant", "model", "bot"] else "user"
            content_text = turn.get("content") or turn.get("text") or ""
            if content_text.strip():
                contents.append({
                    "role": role,
                    "parts": [{"text": content_text.strip()}]
                })

    # Add the current user message
    contents.append({
        "role": "user",
        "parts": [{"text": message.strip()}]
    })

    payload = {
        "system_instruction": {
            "parts": [{"text": SYSTEM_PROMPT}]
        },
        "contents": contents,
        "generationConfig": {
            "temperature": 0.7,
            "maxOutputTokens": 800,
            "topP": 0.95
        }
    }

    try:
        async with httpx.AsyncClient(timeout=30.0) as client:
            response = await client.post(endpoint, json=payload)

            if response.status_code == 200:
                data = response.json()
                candidates = data.get("candidates", [])
                if candidates:
                    parts = candidates[0].get("content", {}).get("parts", [])
                    if parts and "text" in parts[0]:
                        return parts[0]["text"].strip()
                logger.warning(f"Gemini returned unexpected structure: {data}")
                return _get_fallback_reply(message)

            elif response.status_code in (400, 401, 403):
                logger.error(f"Gemini authentication/request error {response.status_code}: {response.text}")
                return _get_fallback_reply(message)
            else:
                logger.error(f"Gemini API returned status {response.status_code}: {response.text}")
                return _get_fallback_reply(message)

    except Exception as exc:
        logger.error(f"Exception contacting Gemini API: {exc}", exc_info=True)
        return _get_fallback_reply(message)
