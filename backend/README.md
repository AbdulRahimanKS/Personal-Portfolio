# Portfolio Contact Service (FastAPI)

FastAPI backend service that receives contact form submissions from your portfolio and delivers real-time email notifications to your inbox (`rahimanks.abdul@gmail.com`).

---

## 1. Setup & Installation

Navigate to the `backend/` folder and install dependencies:

```bash
cd backend
pip install -r requirements.txt
```

---

## 2. Environment Configuration (`.env`)

Configure your email credentials in `backend/.env`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=rahimanks.abdul@gmail.com
SMTP_PASSWORD=your_gmail_app_password_here
RECIPIENT_EMAIL=rahimanks.abdul@gmail.com

PORT=8000
ALLOWED_ORIGINS=http://localhost:5173,http://127.0.0.1:5173
```

### Generating a Gmail App Password (Recommended for Gmail)
1. Go to your **Google Account** > **Security** (https://myaccount.google.com/security).
2. Ensure **2-Step Verification** is turned **ON**.
3. Under *2-Step Verification*, scroll down to **App passwords** (or visit https://myaccount.google.com/apppasswords).
4. Create an App Password named **Portfolio Contact Form**.
5. Copy the generated 16-character code (e.g. `abcd efgh ijkl mnop`) and paste it into `SMTP_PASSWORD` in your `.env`.

---

## 3. Running the Server

Start the FastAPI development server:

```bash
python main.py
```
*Or using uvicorn directly:*
```bash
uvicorn main:app --reload --port 8000
```

- API Base URL: `http://localhost:8000`
- Interactive API Docs (Swagger): `http://localhost:8000/docs`
- Health Check: `http://localhost:8000/health`
