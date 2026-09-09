# Abdul Rahiman K S — Personal Portfolio & AI Services

A modern, responsive, and interactive developer portfolio showcasing full-stack web applications, AI engineering projects, and cloud integrations. Built with a **React 19 (Vite)** single-page frontend and a **FastAPI (Python)** backend service with real-time email delivery and a **Google Gemini-powered AI chatbot**.

---

## Tech Stack

### Frontend
- **Framework**: React 19 + Vite
- **Styling**: Vanilla CSS Modules (scoped & responsive)
- **Icons**: Devicon SVGs, Material Symbols Outlined, Simple Icons
- **Theme**: Dynamic Dark / Light theme with persistent context
- **Navigation**: Single-page smooth-scrolling with active section tracking

### Backend & AI
- **Framework**: FastAPI (Python 3.12)
- **AI / LLM**: Google Gemini 2.5 Flash API (`httpx` asynchronous client)
- **Email Service**: Python `smtplib` / `email.mime` with HTML templates
- **Validation**: Pydantic v2
- **Documentation**: Swagger UI (`/docs`) & ReDoc (`/redoc`)

---

## Key Features

- **Single-Page Architecture**: Seamless, responsive layout with dedicated sections for **Home**, **About**, **Skills**, **Projects**, **Experience**, and **Contact**.
- **Interactive Skills Showcase**: Filterable categories (**Backend**, **AI**, **Frontend**, **Database**, **Tools**, **Cloud**) with click-to-expand details for each technology.
- **Projects & Experiments**: Filterable portfolio projects featuring live links, source code, status tags, and technology chips.
- **AI Portfolio Assistant**: Floating chatbot powered by Gemini 2.5 Flash that answers visitor questions about Abdul's background, skills, and projects with contextual knowledge.
- **Direct Contact Pipeline**: Contact form that submits to the FastAPI backend and instantly dispatches notification emails to your inbox.
- **Dark & Light Mode**: Seamless theme toggling with curated color tokens.

---

## Project Structure

```
├── backend/                  # FastAPI Backend Service
│   ├── .env.example          # Backend environment template
│   ├── ai_service.py         # Gemini API integration & persona knowledge base
│   ├── config.py             # App configuration & CORS settings
│   ├── email_service.py      # SMTP email dispatch & HTML templates
│   ├── main.py               # FastAPI endpoints & CORS middleware
│   ├── requirements.txt      # Python dependencies
│   └── README.md             # Backend setup & API docs
├── public/                   # Static assets & downloadable resume
├── src/
│   ├── components/           # Navbar, Chatbot, Layout, ThemeToggle
│   ├── config/               # API endpoint configurations (api.js)
│   ├── context/              # ThemeContext (Dark/Light mode)
│   ├── pages/                # Home, About, Skills, Projects, Experience, Contact
│   ├── App.jsx               # Main application component
│   └── index.css             # Global styles & design system tokens
├── .env.example              # Frontend environment variables
├── package.json              # Frontend dependencies and scripts
├── vite.config.js            # Vite configuration (with allowedHosts support)
└── README.md                 # Project documentation
```

---

## Quick Start

### 1. Prerequisites
- **Node.js** (v18 or higher)
- **Python** (v3.10 or higher)

### 2. Frontend Setup
```bash
# Install dependencies
npm install

# Setup environment variables
cp .env.example .env

# Run development server
npm run dev
```
The frontend will start at `http://localhost:5173`.

### 3. Backend Setup
```bash
# Navigate to backend
cd backend

# Create virtual environment (recommended)
python3 -m venv .venv
source .venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Setup environment variables
cp .env.example .env
```

Configure `backend/.env`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=rahimanks.abdul@gmail.com
SMTP_PASSWORD=your_gmail_app_password
RECIPIENT_EMAIL=rahimanks.abdul@gmail.com

PORT=8000
ALLOWED_ORIGINS=http://localhost:5173,http://127.0.0.1:5173

GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=gemini-2.5-flash
```

Start the backend:
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```
- Interactive API Docs (Swagger): `http://localhost:8000/docs`
- Health check: `http://localhost:8000/health`

---

## License
Private / Personal Portfolio — Developed by Abdul Rahiman K S.
