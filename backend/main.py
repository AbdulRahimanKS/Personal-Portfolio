import logging
from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
import uvicorn

from config import ALLOWED_ORIGINS, PORT
from email_service import send_contact_email

# Configure logging
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)

app = FastAPI(
    title="Portfolio Contact API",
    description="FastAPI service for receiving contact messages and sending email notifications.",
    version="1.0.0"
)

# Enable CORS for frontend integration (supports localhost, 127.0.0.1, and local WiFi network IPs)
app.add_middleware(
    CORSMiddleware,
    allow_origin_regex=r"^https?://(localhost|127\.0\.0\.1|192\.168\.\d+\.\d+)(:\d+)?$",
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactFormRequest(BaseModel):
    name: str = Field(..., min_length=2, max_length=100, description="Name of the sender")
    email: str = Field(..., min_length=5, max_length=150, description="Email address of the sender")
    subject: str = Field(..., min_length=2, max_length=200, description="Subject of the message")
    message: str = Field(..., min_length=3, max_length=5000, description="Message body")

@app.get("/health", tags=["Health"])
def health_check():
    """Health check endpoint to verify that the backend is up and running."""
    return {"status": "healthy", "service": "portfolio-contact-api"}

@app.post("/api/contact", status_code=status.HTTP_200_OK, tags=["Contact"])
def handle_contact_form(payload: ContactFormRequest):
    """
    Receives contact form submission, validates fields, and sends notification email.
    """
    try:
        # Basic email syntax check
        if "@" not in payload.email or "." not in payload.email.split("@")[-1]:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Please provide a valid email address."
            )

        logger.info(f"Incoming contact request from '{payload.name}' <{payload.email}>: {payload.subject}")

        # Send email via SMTP service
        send_contact_email(
            name=payload.name.strip(),
            sender_email=payload.email.strip(),
            subject=payload.subject.strip(),
            message=payload.message.strip()
        )

        logger.info(f"Successfully processed and sent email from '{payload.name}'")
        return {
            "success": True,
            "message": "Thank you for reaching out! Your message has been sent successfully."
        }

    except ValueError as val_err:
        logger.warning(f"Configuration warning: {val_err}")
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail=str(val_err)
        )
    except Exception as exc:
        logger.error(f"Failed to send email: {exc}", exc_info=True)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to send your message. Please verify your SMTP settings or try again later."
        )

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=PORT, reload=True)
