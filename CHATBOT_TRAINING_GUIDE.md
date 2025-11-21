# Chatbot Training Guide

## How to Train Your Chatbot Based on Your Website

The chatbot is now configured to learn from your website content. Here's how to train it:

## Quick Start

The chatbot automatically extracts knowledge from `src/lib/website-knowledge.ts`. To train it:

1. **Open** `src/lib/website-knowledge.ts`
2. **Update** the content with information from your website
3. **Save** the file
4. **Restart** your development server

That's it! The chatbot will now use your updated content.

## Step-by-Step Training Process

### 1. Extract Content from Your Website Components

#### From Hero Section (`src/components/Hero.tsx`)
- Copy the tagline: "Meet us in the clouds."
- Copy the description text
- Copy statistics (5,000+ airports, 24/7 service, etc.)
- Copy the "Trusted by" text

#### From Services Section (`src/components/Services.tsx`)
- Copy service titles and descriptions
- Copy the main services description
- Update in `website-knowledge.ts` → `services` section

#### From Fleet Section (`src/components/Fleet.tsx`)
- Copy aircraft types and descriptions
- Copy passenger capacity and range information
- Update in `website-knowledge.ts` → `fleet` section

#### From FAQ Section (`src/components/FAQ.tsx`)
- All FAQ questions and answers are already included
- Add more if you have additional FAQs
- Update in `website-knowledge.ts` → `faq` section

#### From Testimonials (`src/components/Testimonials.tsx`)
- Copy client statistics
- Add notable testimonials if needed
- Update in `website-knowledge.ts` → `testimonials` section

#### From Contact Section (`src/components/Contact.tsx`)
- Copy contact information (phone, email, address)
- Copy service types offered
- Update in `website-knowledge.ts` → `contact` section

### 2. Update the Knowledge Base File

Open `src/lib/website-knowledge.ts` and update the relevant sections:

```typescript
export const websiteKnowledge = {
  hero: {
    tagline: "Your tagline here",
    description: "Your description here",
    // ... update with your content
  },
  services: {
    // Update with your services
  },
  // ... etc
};
```

### 3. Add Custom Business Information

You can add custom sections to the knowledge base:

```typescript
export const websiteKnowledge = {
  // ... existing sections
  
  // Add your custom sections
  customInfo: {
    specialOffers: "Your special offers",
    uniqueSellingPoints: ["Point 1", "Point 2"],
    companyHistory: "Your company history",
  },
};
```

Then update `getWebsiteContext()` function to include your custom info:

```typescript
export function getWebsiteContext(): string {
  // ... existing code
  
  return `
    // ... existing context
    
    CUSTOM INFORMATION:
    ${customInfo.specialOffers}
    ${customInfo.uniqueSellingPoints.join("\n")}
    ${customInfo.companyHistory}
  `.trim();
}
```

### 4. Include Blog Content (Optional)

To include blog post content:

1. Create a new section in `website-knowledge.ts`:

```typescript
blogPosts: {
  summaries: [
    "Blog post 1 summary...",
    "Blog post 2 summary...",
  ],
  topics: ["Topic 1", "Topic 2"],
}
```

2. Add to the context in `getWebsiteContext()`

### 5. Test Your Changes

After updating the knowledge base:

1. **Restart your dev server**: `npm run dev`
2. **Open the chatbot** on your website
3. **Ask questions** related to your updated content
4. **Verify** the chatbot responds with your information

## Advanced Training Techniques

### Adding Industry-Specific Knowledge

Add industry-specific information:

```typescript
industry: {
  regulations: "Relevant aviation regulations",
  certifications: "Your certifications",
  associations: "Industry associations you're part of",
}
```

### Adding Seasonal/Promotional Content

```typescript
promotions: {
  current: "Current promotion details",
  seasonal: "Seasonal offers",
  specialEvents: "Special event packages",
}
```

### Adding Detailed Service Descriptions

```typescript
detailedServices: {
  privateCharter: {
    description: "Detailed private charter description",
    process: "Step-by-step booking process",
    benefits: ["Benefit 1", "Benefit 2"],
  },
  // ... other services
}
```

## Best Practices

### 1. Keep Information Accurate
- Always verify information before adding it
- Update regularly as your business changes
- Remove outdated information

### 2. Be Specific
- Include specific numbers and statistics
- Mention unique features or services
- Include exact contact information

### 3. Organize by Topic
- Group related information together
- Use clear section headers
- Make it easy to find and update

### 4. Test Regularly
- Test after each update
- Ask questions from different angles
- Verify the chatbot provides correct information

### 5. Update Frequently
- Update when you add new services
- Update when you change pricing
- Update when you have new FAQs

## Example: Complete Update

Here's an example of updating the services section:

```typescript
// Before
services: {
  items: [
    {
      title: "Premium Fleet",
      description: "Basic description",
    },
  ],
},

// After (with more detail)
services: {
  items: [
    {
      title: "Premium Fleet",
      description: "Access our exclusive collection of the world's finest private aircraft, including Gulfstream G650, Bombardier Global 7500, and Cessna Citation XLS+. Each aircraft is meticulously maintained to the highest standards with monthly safety inspections and premium interior configurations.",
      aircraft: ["Gulfstream G650", "Bombardier Global 7500", "Cessna Citation XLS+"],
      maintenance: "Monthly safety inspections",
    },
  ],
},
```

## Troubleshooting

### Chatbot not using updated information?
1. Make sure you saved `website-knowledge.ts`
2. Restart your development server
3. Clear browser cache
4. Check browser console for errors

### Responses are too generic?
- Add more specific information to the knowledge base
- Include more details in each section
- Add examples and use cases

### Missing information in responses?
- Check if the information is in `website-knowledge.ts`
- Verify it's included in `getWebsiteContext()`
- Test with specific questions

## Next Steps

1. **Start Small**: Begin with the most important information
2. **Iterate**: Add more content over time
3. **Monitor**: Watch what users ask about
4. **Refine**: Update based on common questions

## Need Help?

- Check `src/lib/website-knowledge.ts` for the current knowledge base
- Review `src/lib/chatbot-service.ts` to see how it's used
- Test the chatbot with various questions
- Update the knowledge base based on user questions

## Summary

Training your chatbot is simple:
1. Update `src/lib/website-knowledge.ts` with your website content
2. Restart your dev server
3. Test the chatbot

The more detailed and accurate your knowledge base, the better your chatbot will perform!

