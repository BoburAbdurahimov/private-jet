# EmailJS Setup Guide for Managerius Contact Form

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Enter your credentials:
   - **Email**: `hello@managerius.com`
   - **Password**: `sr4msy)rxdKTVA-`
5. Click "Create Service"
6. **Copy the Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Template Name**: `Contact Form Template`

**Subject**: `New Contact Form Submission from {{from_name}}`

**Content**:
```
New contact form submission received:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service Type: {{service_type}}

Message:
{{message}}

---
This message was sent from the Managerius website contact form.
```

4. Click "Save"
5. **Copy the Template ID** (e.g., `template_xyz789`)

## Step 4: Update Code
Replace the placeholders in `src/components/Contact.tsx`:

```typescript
const serviceId = 'service_abc123'; // Your actual service ID
const templateId = 'template_xyz789'; // Your actual template ID
const publicKey = 'VkFdF7NYu7NsWbr90'; // Your public key
```

## Step 5: Test
1. Fill out the contact form
2. Submit it
3. Check `hello@managerius.com` for the email

## Troubleshooting
- Make sure your email service is connected and verified
- Check that the template variables match exactly
- Verify your public key is correct
- Check browser console for any error messages
