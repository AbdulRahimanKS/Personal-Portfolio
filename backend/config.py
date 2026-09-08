import os
from pathlib import Path
from dotenv import load_dotenv

# Locate and load the .env file located in the backend folder
BASE_DIR = Path(__file__).resolve().parent
ENV_PATH = BASE_DIR / ".env"
load_dotenv(dotenv_path=ENV_PATH)

# SMTP Configuration
SMTP_HOST = os.getenv("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
SMTP_USER = os.getenv("SMTP_USER", "rahimanks.abdul@gmail.com")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD", "")
RECIPIENT_EMAIL = os.getenv("RECIPIENT_EMAIL", "rahimanks.abdul@gmail.com")

# Server Configuration
PORT = int(os.getenv("PORT", "8000"))

# Allowed CORS Origins
origins_raw = os.getenv(
    "ALLOWED_ORIGINS",
    "http://localhost:5173,http://127.0.0.1:5173,http://localhost:3000"
)
ALLOWED_ORIGINS = [origin.strip() for origin in origins_raw.split(",") if origin.strip()]

# AI Assistant Configuration
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "")
GEMINI_MODEL = os.getenv("GEMINI_MODEL", "gemini-2.5-flash")
