# Portfolio Backend & AI Services (FastAPI)

FastAPI backend service powering:
- **Contact Service**: Contact form submissions with real-time email notifications to `rahimanks.abdul@gmail.com`.
- **AI Assistant Service**: Interactive portfolio chatbot powered by Google Gemini AI with smart conversational knowledge about Abdul Rahiman's skills, projects, and background.

---

## 1. Setup & Installation

Navigate to the `backend/` folder and install dependencies:

```bash
cd backend
pip install -r requirements.txt
```

---

## 2. Environment Configuration (`.env`)

Configure your credentials in `backend/.env`:

```env
# SMTP Email Configuration (For Contact Form)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=rahimanks.abdul@gmail.com
SMTP_PASSWORD=your_gmail_app_password_here
RECIPIENT_EMAIL=rahimanks.abdul@gmail.com

# Server & Security
PORT=8000
ALLOWED_ORIGINS=http://localhost:5173,http://127.0.0.1:5173

# AI Assistant (Free Gemini API Key)
GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=gemini-2.5-flash
```

### Generating Credentials:
1. **Gmail App Password (for Contact Form)**:
   - Go to [Google App Passwords](https://myaccount.google.com/apppasswords) (ensure 2-Step Verification is enabled).
   - Generate an App Password named **Portfolio Contact Form**.
   - Copy the 16-character code into `SMTP_PASSWORD`.
2. **Gemini API Key (for AI Assistant)**:
   - Get a free API key at [Google AI Studio](https://aistudio.google.com/app/apikey).
   - Paste the key into `GEMINI_API_KEY`.

---

## 3. Running the Server

Start the FastAPI development server:

```bash
python main.py
```
*Or using uvicorn directly:*
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

---

## 4. API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/health` | Service health status check |
| `POST` | `/api/contact` | Submits contact form and sends automated email notification |
| `POST` | `/api/chat` | AI portfolio chatbot conversation (powered by Gemini) |
| `GET` | `/docs` | Interactive Swagger API documentation |
| `GET` | `/redoc` | ReDoc API documentation |
