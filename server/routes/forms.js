import { Router } from 'express';
import { body } from 'express-validator';
import { getDB } from '../config/database.js';
import { handleValidationErrors } from '../middleware/validation.js';
import { sendEmail } from '../services/emailService.js';

const router = Router();

router.post(
  ['/contact', '/submit'],
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('message').trim().notEmpty().withMessage('Message is required'),
  ],
  handleValidationErrors,
  async (req, res, next) => {
    try {
      const { name, email, phone, message } = req.body;
      const db = getDB();
      const contact = {
        name,
        email,
        phone: phone || '',
        message,
        createdAt: new Date(),
      };

      await db.collection('contacts').insertOne(contact);

      if (process.env.EMAIL_SERVICE && process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        await sendEmail({
          to: process.env.EMAIL_USER,
          subject: 'New portfolio contact form submission',
          text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nMessage: ${message}`,
        });
      }

      res.json({ success: true, message: 'Contact form submitted successfully' });
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/audit',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('businessName').trim().notEmpty().withMessage('Business name is required'),
    body('location').trim().notEmpty().withMessage('Location is required'),
    body('industry').trim().notEmpty().withMessage('Industry is required'),
    body('goals').isArray({ min: 1 }).withMessage('Select at least one goal'),
  ],
  handleValidationErrors,
  async (req, res, next) => {
    try {
      const {
        name,
        email,
        phone,
        businessName,
        location,
        listingUrl,
        industry,
        customIndustry,
        goals,
        notes,
      } = req.body;

      const db = getDB();
      const audit = {
        name,
        email,
        phone: phone || '',
        businessName,
        location,
        listingUrl: listingUrl || '',
        industry,
        customIndustry: customIndustry || '',
        goals,
        notes: notes || '',
        createdAt: new Date(),
      };

      await db.collection('audit_submissions').insertOne(audit);

      if (process.env.EMAIL_SERVICE && process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        await sendEmail({
          to: process.env.EMAIL_USER,
          subject: 'New free audit request',
          text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nBusiness: ${businessName}\nLocation: ${location}\nIndustry: ${industry}\nGoals: ${goals.join(', ')}\nListing URL: ${listingUrl || 'Not provided'}\nNotes: ${notes || 'None'}`,
        });
      }

      res.json({ success: true, message: 'Audit request submitted successfully' });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
