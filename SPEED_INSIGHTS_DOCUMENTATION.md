# Vercel Speed Insights Integration

## Overview
This documentation covers the integration of Vercel Speed Insights into the Managerius React application for performance monitoring and analytics.

## Installation

### Package Installation
```bash
npm install @vercel/speed-insights
```

### Component Integration
The Speed Insights component has been integrated into the main App.tsx file and will automatically load in production environments.

## Implementation Details

### SpeedInsights Component (`src/components/SpeedInsights.tsx`)
- **Production Only**: Only loads in production environment
- **Automatic Loading**: Loads the Vercel Speed Insights script
- **Error Handling**: Includes error handling for script loading failures
- **Cleanup**: Properly removes script on component unmount
- **Duplicate Prevention**: Checks if Speed Insights is already loaded

### Key Features
- **Automatic Performance Tracking**: Tracks Core Web Vitals automatically
- **Real User Monitoring**: Collects performance data from actual users
- **Production Analytics**: Only runs in production to avoid development noise
- **Error Resilience**: Handles script loading failures gracefully

## Custom Analytics Hook

### useSpeedInsights Hook (`src/hooks/useSpeedInsights.ts`)
Provides custom analytics tracking capabilities:

#### Available Methods
- **trackEvent**: Track custom events
- **trackPageView**: Track page views with metadata
- **trackInteraction**: Track user interactions
- **trackPerformance**: Track performance metrics
- **trackBusinessEvent**: Track business-specific events

#### Usage Example
```tsx
import { useSpeedInsights, SpeedInsightsEvents } from '@/hooks/useSpeedInsights';

const MyComponent = () => {
  const { trackEvent, trackPageView, trackBusinessEvent } = useSpeedInsights();

  const handleButtonClick = () => {
    trackEvent(SpeedInsightsEvents.BUSINESS.CTA_CLICK, {
      button: 'book-flight',
      page: 'homepage'
    });
  };

  const handlePageView = () => {
    trackPageView('blog-post', {
      postId: 'private-jet-benefits',
      category: 'aviation'
    });
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Book Flight</button>
    </div>
  );
};
```

## Predefined Events

### Navigation Events
- `home_click`: User clicks home navigation
- `blog_click`: User clicks blog navigation
- `contact_click`: User clicks contact navigation
- `jet_luxe_click`: User clicks Jet Luxe navigation
- `affiliates_click`: User clicks affiliates navigation

### Blog Events
- `blog_post_view`: User views a blog post
- `blog_post_share`: User shares a blog post
- `blog_post_like`: User likes a blog post
- `blog_post_comment`: User comments on a blog post
- `blog_search`: User searches the blog

### Business Events
- `quote_request`: User requests a quote
- `contact_form_submit`: User submits contact form
- `affiliate_click`: User clicks affiliate link
- `cta_click`: User clicks call-to-action button

### Performance Events
- `page_load`: Page load performance
- `image_load`: Image loading performance
- `api_call`: API call performance
- `error_occurred`: Error occurrence tracking

## Integration Examples

### Blog Post Tracking
```tsx
import { useSpeedInsights, SpeedInsightsEvents } from '@/hooks/useSpeedInsights';

const BlogPost = ({ post }) => {
  const { trackEvent, trackPageView } = useSpeedInsights();

  useEffect(() => {
    // Track page view when component mounts
    trackPageView('blog-post', {
      postId: post.id,
      title: post.title,
      category: post.category
    });
  }, [post.id, trackPageView]);

  const handleShare = () => {
    trackEvent(SpeedInsightsEvents.BLOG.POST_SHARE, {
      postId: post.id,
      platform: 'social'
    });
  };

  return (
    <article>
      <h1>{post.title}</h1>
      <button onClick={handleShare}>Share</button>
    </article>
  );
};
```

### Navigation Tracking
```tsx
import { useSpeedInsights, SpeedInsightsEvents } from '@/hooks/useSpeedInsights';

const Navigation = () => {
  const { trackEvent } = useSpeedInsights();

  const handleNavClick = (destination: string) => {
    trackEvent(SpeedInsightsEvents.NAVIGATION[`${destination.toUpperCase()}_CLICK`], {
      from: 'navigation',
      destination
    });
  };

  return (
    <nav>
      <a href="/" onClick={() => handleNavClick('home')}>Home</a>
      <a href="/blog" onClick={() => handleNavClick('blog')}>Blog</a>
      <a href="/contact" onClick={() => handleNavClick('contact')}>Contact</a>
    </nav>
  );
};
```

### Business Event Tracking
```tsx
import { useSpeedInsights, SpeedInsightsEvents } from '@/hooks/useSpeedInsights';

const ContactForm = () => {
  const { trackBusinessEvent } = useSpeedInsights();

  const handleSubmit = (formData) => {
    trackBusinessEvent(SpeedInsightsEvents.BUSINESS.CONTACT_FORM_SUBMIT, {
      formType: 'contact',
      fields: Object.keys(formData),
      timestamp: new Date().toISOString()
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
    </form>
  );
};
```

## Performance Monitoring

### Core Web Vitals
Speed Insights automatically tracks:
- **Largest Contentful Paint (LCP)**: Loading performance
- **First Input Delay (FID)**: Interactivity
- **Cumulative Layout Shift (CLS)**: Visual stability

### Custom Performance Tracking
```tsx
import { useSpeedInsights } from '@/hooks/useSpeedInsights';

const ImageComponent = ({ src, alt }) => {
  const { trackPerformance } = useSpeedInsights();

  const handleImageLoad = (event) => {
    const loadTime = performance.now() - startTime;
    trackPerformance('image_load_time', loadTime, {
      imageSrc: src,
      imageAlt: alt
    });
  };

  return (
    <img 
      src={src} 
      alt={alt} 
      onLoad={handleImageLoad}
    />
  );
};
```

## Configuration

### Environment Variables
Speed Insights will automatically detect the Vercel environment when deployed. For local development, it won't load to avoid noise in analytics.

### Production Deployment
When deployed to Vercel, Speed Insights will:
- Automatically detect the Vercel environment
- Start collecting performance data
- Send data to Vercel's analytics dashboard
- Provide insights in the Vercel dashboard

## Analytics Dashboard

### Accessing Data
1. **Vercel Dashboard**: Navigate to your project in Vercel dashboard
2. **Analytics Tab**: Click on the Analytics tab
3. **Speed Insights**: View performance metrics and user behavior
4. **Real-time Data**: Monitor performance in real-time

### Available Metrics
- **Page Load Times**: Average and percentile load times
- **Core Web Vitals**: LCP, FID, CLS scores
- **User Behavior**: Navigation patterns and interactions
- **Performance Trends**: Historical performance data
- **Geographic Data**: Performance by location
- **Device Data**: Performance by device type

## Best Practices

### Event Naming
- Use consistent naming conventions
- Use snake_case for event names
- Be descriptive but concise
- Group related events with prefixes

### Data Collection
- Only track meaningful events
- Avoid tracking sensitive information
- Use consistent property names
- Include relevant metadata

### Performance Impact
- Speed Insights is lightweight
- Minimal impact on page load
- Asynchronous loading
- Production-only execution

## Troubleshooting

### Common Issues
1. **Script Not Loading**: Check network connectivity and script URL
2. **No Data in Dashboard**: Ensure deployment to Vercel
3. **Development Noise**: Speed Insights only runs in production
4. **TypeScript Errors**: Ensure proper type declarations

### Debug Mode
To enable debug mode in development:
```tsx
// Add to your component for debugging
useEffect(() => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Speed Insights Debug Mode');
  }
}, []);
```

## Maintenance

### Regular Monitoring
- Check analytics dashboard weekly
- Monitor performance trends
- Review user behavior patterns
- Identify performance bottlenecks

### Data Analysis
- Analyze Core Web Vitals trends
- Review user interaction patterns
- Monitor business event conversions
- Track performance improvements

### Optimization
- Use insights to optimize performance
- A/B test based on user behavior
- Optimize based on performance data
- Improve user experience metrics

This Speed Insights integration provides comprehensive performance monitoring and analytics for the Managerius website, helping to optimize user experience and track business metrics effectively.
