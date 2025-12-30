/**
 * @file send-email.js
 * @description Vercel serverless function for sending emails via Resend
 * 
 * WHY: Provides a secure backend endpoint for contact form submissions.
 *      Keeps API keys server-side and handles email delivery.
 * 
 * WHAT: POST endpoint that receives form data and sends email via Resend.
 * WHERE: Deployed as Vercel serverless function at /api/send-email
 * 
 * SETUP:
 * 1. Add RESEND_API_KEY to Vercel environment variables
 */

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { to, subject, text, html } = req.body;

  if (!to || !subject || (!text && !html)) {
    return res.status(400).json({ error: 'Missing required fields: to, subject, and text/html' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'GlimfoAssist <onboarding@resend.dev>',
      to: Array.isArray(to) ? to : [to],
      subject,
      text,
      html,
    });

    if (error) {
      console.error('Resend API error:', error);
      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json({ success: true, id: data.id });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
