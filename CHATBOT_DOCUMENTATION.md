# AI Chatbot Documentation

## Overview

The website now includes an AI-powered chatbot that answers questions about our private jet charter services. The chatbot appears as a floating button in the bottom-right corner of all pages.

## Features

- **AI-Powered Responses**: Uses OpenAI GPT-3.5-turbo for intelligent, context-aware responses
- **Fallback System**: Works without API key using rule-based responses
- **Business Knowledge**: Pre-configured with information about services, pricing, booking, safety, and fleet
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Conversation History**: Maintains context throughout the conversation
- **Professional UI**: Matches the website's luxury aesthetic

## Setup

### Option 1: With OpenAI API (Recommended)

1. Get an OpenAI API key from [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Create a `.env` file in the root directory
3. Add your API key:
   ```
   VITE_OPENAI_API_KEY=your_api_key_here
   ```
4. Restart your development server

### Option 2: Without API Key (Fallback Mode)

The chatbot will automatically use a rule-based fallback system if no API key is provided. This system can answer common questions about:
- Booking information
- Pricing inquiries
- Safety standards
- Aircraft and fleet
- Services and amenities
- Contact information

## Configuration

### Customizing Business Context

Edit `src/lib/chatbot-service.ts` to update the `BUSINESS_CONTEXT` constant with your specific business information.

### Changing the Chatbot Model

In `src/lib/chatbot-service.ts`, you can change the OpenAI model:
```typescript
model: "gpt-3.5-turbo", // Change to "gpt-4" for better responses (higher cost)
```

### Adjusting Response Parameters

Modify the API call parameters:
```typescript
max_tokens: 500,      // Maximum response length
temperature: 0.7,     // Creativity (0.0-1.0)
```

## Customization

### Styling

The chatbot uses Tailwind CSS and follows your design system. You can customize:
- Colors: Modify the `bg-primary`, `text-primary-foreground` classes
- Size: Adjust width/height in the Chatbot component
- Position: Change `bottom-6 right-6` to reposition

### Behavior

- **Initial Message**: Edit the first message in the `messages` state
- **Placeholder Text**: Change the input placeholder
- **Welcome Message**: Modify the initial assistant message

## Usage

### For Users

1. Click the chat button in the bottom-right corner
2. Type your question about private jet services
3. Receive instant AI-powered answers
4. The chatbot can help with:
   - Booking information
   - Pricing questions
   - Fleet and aircraft details
   - Safety and security
   - Services and amenities
   - Contact information

### For Developers

The chatbot component is already integrated into `App.tsx`. It appears on all pages automatically.

To remove it:
```typescript
// In src/App.tsx, remove or comment out:
// <Chatbot />
```

## Technical Details

### Components

- **Chatbot.tsx**: Main component with UI and state management
- **chatbot-service.ts**: AI service integration and fallback logic

### API Integration

- Uses OpenAI Chat Completions API
- Maintains conversation history (last 10 messages)
- Includes business context in every request
- Handles errors gracefully with fallback responses

### Performance

- Lazy loading ready (can be lazy loaded if needed)
- Minimal bundle size impact
- Efficient state management
- Optimized API calls

## Troubleshooting

### Chatbot not appearing
- Check that `<Chatbot />` is included in `App.tsx`
- Verify the component is not hidden by CSS

### API errors
- Verify your API key is correct
- Check your OpenAI account has credits
- The chatbot will automatically fall back to rule-based responses

### Responses not accurate
- Update the `BUSINESS_CONTEXT` in `chatbot-service.ts`
- Consider using GPT-4 for better responses
- Add more specific information to the context

## Cost Considerations

- GPT-3.5-turbo: ~$0.002 per 1K tokens (very affordable)
- Average conversation: ~500 tokens
- Estimate: ~4000 conversations per $1

For production, consider:
- Rate limiting
- Caching common responses
- Monitoring API usage

## Future Enhancements

Potential improvements:
- [ ] Multi-language support
- [ ] Voice input/output
- [ ] Integration with booking system
- [ ] Analytics and conversation tracking
- [ ] Custom training on business data
- [ ] Proactive chat initiation
- [ ] File upload support (e.g., trip details)

## Support

For issues or questions about the chatbot implementation, please contact the development team.

