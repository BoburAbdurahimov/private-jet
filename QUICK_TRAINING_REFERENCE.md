# Quick Chatbot Training Reference

## How to Train Your Chatbot in 3 Steps

### Step 1: Open the Knowledge Base File
📁 **File**: `src/lib/website-knowledge.ts`

### Step 2: Update the Content
Copy content from your website components and paste it into the relevant sections:

- **Hero content** → `hero` section
- **Services** → `services` section  
- **Fleet info** → `fleet` section
- **Contact details** → `contact` section
- **Testimonials** → `testimonials` section
- **FAQ** → `faq` section

### Step 3: Restart & Test
```bash
# Restart your dev server
npm run dev

# Then test the chatbot on your website
```

## Where to Find Content on Your Website

| Website Section | Component File | Knowledge Base Section |
|----------------|----------------|------------------------|
| Hero/Banner | `src/components/Hero.tsx` | `hero` |
| Services | `src/components/Services.tsx` | `services` |
| Fleet | `src/components/Fleet.tsx` | `fleet` |
| FAQ | `src/components/FAQ.tsx` | `faq` |
| Contact | `src/components/Contact.tsx` | `contact` |
| Testimonials | `src/components/Testimonials.tsx` | `testimonials` |
| Partners | `src/components/Partners.tsx` | `partners` |

## Example: Updating Services

```typescript
// In src/lib/website-knowledge.ts
services: {
  items: [
    {
      title: "Your Service Title",
      description: "Your service description from website",
    },
  ],
},
```

## Pro Tips

✅ **Do:**
- Copy exact text from your website
- Include specific numbers and statistics
- Update regularly as content changes

❌ **Don't:**
- Make up information
- Leave placeholder text
- Forget to restart the server

## Need More Help?

See `CHATBOT_TRAINING_GUIDE.md` for detailed instructions.

