import nodemailer from 'nodemailer';

let transporter = null;

export function initializeEmail() {
  if (!process.env.EMAIL_SERVICE || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn('⚠️ Email service not configured. EMAIL_SERVICE, EMAIL_USER, and EMAIL_PASS are required to send email.');
    return;
  }

  transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  transporter.verify((error, success) => {
    if (error) {
      console.error('✗ Email service verification failed:', error.message);
      transporter = null;
    } else {
      console.log('✓ Email service initialized');
    }
  });
}

export async function sendEmail({ subject, text, html, to }) {
  if (!transporter) {
    throw new Error('Email service is not initialized');
  }

  return transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
    html,
  });
}
