import smtplib
import logging
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
from config import SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, RECIPIENT_EMAIL

logger = logging.getLogger(__name__)

def build_admin_notification(name: str, sender_email: str, subject: str, message: str, date_str: str) -> MIMEMultipart:
    """Creates the notification email delivered to Abdul Rahiman's inbox."""
    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"[Portfolio Inquiry] {subject}"
    msg["From"] = f'"{name}" <{SMTP_USER}>'
    msg["To"] = RECIPIENT_EMAIL
    msg["Reply-To"] = sender_email

    plain_text = f"""New Portfolio Inquiry

From: {name} ({sender_email})
Date: {date_str}
Subject: {subject}

Message:
{message}

---
Click Reply to respond directly to {sender_email}.
"""

    html_content = f"""<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body {{
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background-color: #f8fafc;
      margin: 0;
      padding: 24px;
      color: #1e293b;
    }}
    .container {{
      max-width: 600px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 12px;
      border: 1px solid #e2e8f0;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }}
    .header {{
      background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
      color: #ffffff;
      padding: 24px 32px;
    }}
    .header h1 {{
      margin: 0;
      font-size: 20px;
      font-weight: 600;
      letter-spacing: -0.01em;
    }}
    .header p {{
      margin: 6px 0 0 0;
      font-size: 14px;
      opacity: 0.9;
    }}
    .body {{
      padding: 32px;
    }}
    .field {{
      margin-bottom: 20px;
    }}
    .label {{
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #64748b;
      margin-bottom: 4px;
    }}
    .value {{
      font-size: 15px;
      color: #0f172a;
      font-weight: 500;
    }}
    .message-box {{
      background-color: #f1f5f9;
      border-left: 4px solid #2563eb;
      padding: 16px;
      border-radius: 6px;
      font-size: 15px;
      line-height: 1.6;
      white-space: pre-wrap;
      color: #1e293b;
      margin-top: 8px;
    }}
    .footer {{
      border-top: 1px solid #e2e8f0;
      padding: 16px 32px;
      background-color: #f8fafc;
      font-size: 13px;
      color: #94a3b8;
      text-align: center;
    }}
    .reply-button {{
      display: inline-block;
      margin-top: 20px;
      background-color: #2563eb;
      color: #ffffff !important;
      text-decoration: none;
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 600;
      font-size: 14px;
    }}
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Portfolio Message</h1>
      <p>Direct inquiry from portfolio contact form</p>
    </div>
    <div class="body">
      <div class="field">
        <div class="label">Sender Name</div>
        <div class="value">{name}</div>
      </div>
      <div class="field">
        <div class="label">Sender Email</div>
        <div class="value"><a href="mailto:{sender_email}" style="color: #2563eb; text-decoration: none;">{sender_email}</a></div>
      </div>
      <div class="field">
        <div class="label">Subject</div>
        <div class="value">{subject}</div>
      </div>
      <div class="field">
        <div class="label">Timestamp</div>
        <div class="value">{date_str}</div>
      </div>
      <div class="field">
        <div class="label">Message</div>
        <div class="message-box">{message}</div>
      </div>
      <div style="margin-top: 24px; text-align: center;">
        <a href="mailto:{sender_email}?subject=Re: {subject}" class="reply-button">Reply Directly to {name}</a>
      </div>
    </div>
    <div class="footer">
      Delivered automatically via Portfolio Contact Service.
    </div>
  </div>
</body>
</html>"""

    msg.attach(MIMEText(plain_text, "plain"))
    msg.attach(MIMEText(html_content, "html"))
    return msg


def build_client_confirmation(name: str, recipient_email: str, subject: str, message: str, date_str: str) -> MIMEMultipart:
    """Creates an elegant, professional confirmation auto-reply delivered to the visitor."""
    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"Thank you for reaching out, {name} | Abdul Rahiman"
    msg["From"] = f'"Abdul Rahiman" <{SMTP_USER}>'
    msg["To"] = recipient_email
    msg["Reply-To"] = RECIPIENT_EMAIL

    plain_text = f"""Hi {name},

Thank you for reaching out! I have received your message regarding "{subject}" and wanted to confirm it safely reached my inbox.

What to expect next:
I review all incoming inquiries and will get back to you within 24 hours (often much sooner).

Summary of your message ({date_str}):
"{message}"

If your matter is time-sensitive, feel free to reply directly to this email or connect with me on LinkedIn: https://www.linkedin.com/in/abdul-rahiman-ks

Warm regards,

Abdul Rahiman
Full Stack Developer & AI Solutions Engineer
Kochi, Kerala, India
https://github.com/AbdulRahimanKS
"""

    html_content = f"""<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body {{
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background-color: #f8fafc;
      margin: 0;
      padding: 24px;
      color: #1e293b;
    }}
    .container {{
      max-width: 600px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 12px;
      border: 1px solid #e2e8f0;
      overflow: hidden;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
    }}
    .header {{
      background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%);
      color: #ffffff;
      padding: 32px;
      text-align: left;
    }}
    .header h1 {{
      margin: 0;
      font-size: 22px;
      font-weight: 700;
      letter-spacing: -0.02em;
    }}
    .header p {{
      margin: 8px 0 0 0;
      font-size: 14px;
      color: #93c5fd;
    }}
    .body {{
      padding: 32px;
      line-height: 1.65;
    }}
    .greeting {{
      font-size: 17px;
      font-weight: 600;
      color: #0f172a;
      margin-bottom: 16px;
    }}
    .intro {{
      font-size: 15px;
      color: #334155;
      margin-bottom: 24px;
    }}
    .recap-card {{
      background-color: #f8fafc;
      border: 1px solid #e2e8f0;
      border-left: 4px solid #2563eb;
      border-radius: 8px;
      padding: 18px 20px;
      margin-bottom: 28px;
    }}
    .recap-title {{
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #64748b;
      margin-bottom: 8px;
    }}
    .recap-subject {{
      font-size: 15px;
      font-weight: 600;
      color: #0f172a;
      margin-bottom: 6px;
    }}
    .recap-message {{
      font-size: 14px;
      color: #475569;
      white-space: pre-wrap;
      font-style: italic;
    }}
    .timeline-card {{
      background: #eff6ff;
      border-radius: 8px;
      padding: 16px 20px;
      margin-bottom: 28px;
    }}
    .timeline-title {{
      font-size: 14px;
      font-weight: 700;
      color: #1e40af;
      margin-bottom: 4px;
    }}
    .timeline-text {{
      font-size: 14px;
      color: #1e3a8a;
      margin: 0;
    }}
    .signature {{
      border-top: 1px solid #e2e8f0;
      padding-top: 24px;
      margin-top: 24px;
    }}
    .sign-name {{
      font-size: 16px;
      font-weight: 700;
      color: #0f172a;
      margin: 0 0 4px 0;
    }}
    .sign-role {{
      font-size: 13px;
      color: #64748b;
      margin: 0 0 12px 0;
    }}
    .social-links {{
      font-size: 13px;
    }}
    .social-links a {{
      color: #2563eb;
      text-decoration: none;
      font-weight: 500;
      margin-right: 16px;
    }}
    .footer {{
      background-color: #f8fafc;
      border-top: 1px solid #e2e8f0;
      padding: 16px 32px;
      font-size: 12px;
      color: #94a3b8;
      text-align: center;
    }}
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Message Received</h1>
      <p>Abdul Rahiman &bull; Full Stack Developer</p>
    </div>
    <div class="body">
      <div class="greeting">Hi {name},</div>
      <div class="intro">
        Thank you for getting in touch! I have received your message and wanted to confirm that it reached my inbox safely.
      </div>

      <div class="recap-card">
        <div class="recap-title">Summary of Your Inquiry ({date_str})</div>
        <div class="recap-subject">{subject}</div>
        <div class="recap-message">&ldquo;{message}&rdquo;</div>
      </div>

      <div class="timeline-card">
        <div class="timeline-title">&bull; Next Steps</div>
        <p class="timeline-text">
          I personally review every inquiry and typically respond within <strong>24 hours</strong>. If your matter is time-sensitive, feel free to reply directly to this email.
        </p>
      </div>

      <div class="signature">
        <div class="sign-name">Abdul Rahiman</div>
        <div class="sign-role">Full Stack Developer & AI Solutions Engineer &bull; Kochi, Kerala, India</div>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/abdul-rahiman-ks" target="_blank">LinkedIn</a>
          <a href="https://github.com/AbdulRahimanKS" target="_blank">GitHub</a>
          <a href="mailto:{RECIPIENT_EMAIL}">Email Me</a>
        </div>
      </div>
    </div>
    <div class="footer">
      You received this automated confirmation because you submitted a contact inquiry on my portfolio.
    </div>
  </div>
</body>
</html>"""

    msg.attach(MIMEText(plain_text, "plain"))
    msg.attach(MIMEText(html_content, "html"))
    return msg


def send_contact_email(name: str, sender_email: str, subject: str, message: str) -> dict:
    """
    1. Sends the inquiry notification to Abdul Rahiman (RECIPIENT_EMAIL).
    2. Sends a professional auto-confirmation email to the visitor (sender_email).
    """
    if not SMTP_USER or not SMTP_PASSWORD or SMTP_PASSWORD == "your_gmail_app_password_here":
        raise ValueError(
            "SMTP credentials not configured. Please add your SMTP_USER and SMTP_PASSWORD in backend/.env."
        )

    now_str = datetime.now().strftime("%B %d, %Y at %I:%M %p")

    # 1. Prepare Admin Notification Email
    admin_msg = build_admin_notification(
        name=name,
        sender_email=sender_email,
        subject=subject,
        message=message,
        date_str=now_str
    )

    # 2. Prepare Visitor Confirmation Email
    client_msg = build_client_confirmation(
        name=name,
        recipient_email=sender_email,
        subject=subject,
        message=message,
        date_str=now_str
    )

    # Open SMTP connection and send both emails in a single efficient session
    def dispatch(server):
        # Deliver notification to admin
        server.sendmail(SMTP_USER, [RECIPIENT_EMAIL], admin_msg.as_string())
        logger.info(f"Delivered notification to admin ({RECIPIENT_EMAIL})")

        # Deliver professional confirmation to visitor
        try:
            server.sendmail(SMTP_USER, [sender_email], client_msg.as_string())
            logger.info(f"Delivered confirmation auto-reply to client ({sender_email})")
        except Exception as client_err:
            logger.warning(f"Could not send confirmation to client '{sender_email}': {client_err}")

    if SMTP_PORT == 465:
        with smtplib.SMTP_SSL(SMTP_HOST, SMTP_PORT) as server:
            server.login(SMTP_USER, SMTP_PASSWORD)
            dispatch(server)
    else:
        with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
            server.ehlo()
            server.starttls()
            server.ehlo()
            server.login(SMTP_USER, SMTP_PASSWORD)
            dispatch(server)

    return {"status": "success", "message": "Email sent and confirmation delivered successfully"}
