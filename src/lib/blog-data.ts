import { marked } from 'marked';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  tags: string[];
  published: boolean;
  scheduled: boolean;
  scheduledDate?: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  author: string;
  views: number;
  likes: number;
  createdAt: string;
  updatedAt: string;
}

// Default blog posts data
const defaultBlogPosts: BlogPost[] = [
  {
    id: "sustainable-private-aviation",
    title: "The Future of Sustainable Private Aviation",
    excerpt: "Exploring eco-friendly innovations in private jet technology and carbon-neutral flight solutions.",
    content: `The private aviation industry is at a pivotal moment in its evolution. As environmental consciousness grows and technology advances, sustainable private aviation is no longer a distant dream but an emerging reality that's reshaping how we think about luxury travel.

## Carbon-Neutral Flight Technologies

Leading aircraft manufacturers are investing heavily in sustainable aviation fuels (SAFs) and electric propulsion systems. These innovations promise to reduce carbon emissions by up to 80% compared to traditional jet fuel, making private aviation more environmentally responsible.

## Electric and Hybrid Aircraft

The development of electric and hybrid-electric aircraft is accelerating rapidly. Companies like Eviation and Heart Aerospace are pioneering electric aircraft that could revolutionize short-haul private travel while maintaining the luxury and convenience that discerning travelers expect.

## Carbon Offset Programs

Many private aviation companies are implementing comprehensive carbon offset programs, allowing clients to neutralize their flight emissions through verified environmental projects. These programs range from reforestation initiatives to renewable energy investments.

## The Path Forward

As we look toward the future, sustainable private aviation represents not just an environmental imperative but a competitive advantage. Clients increasingly value companies that demonstrate environmental responsibility while maintaining the highest standards of luxury and service.`,
    date: "March 20, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=450&fit=crop&crop=center",
    category: "Innovation",
    tags: ["sustainability", "aviation", "technology", "environment"],
    published: true,
    scheduled: false,
    seoTitle: "Sustainable Private Aviation: The Future of Eco-Friendly Luxury Travel",
    seoDescription: "Discover how private aviation is embracing sustainability with electric aircraft, SAF fuels, and carbon offset programs for environmentally conscious luxury travel.",
    seoKeywords: ["sustainable aviation", "private jets", "eco-friendly travel", "carbon neutral flights"],
    author: "Managerius Team",
    views: 1247,
    likes: 89,
    createdAt: "2025-03-20T10:00:00Z",
    updatedAt: "2025-03-20T10:00:00Z"
  },
  {
    id: "luxury-jet-interiors",
    title: "Luxury Redefined: The Most Exclusive Private Jet Interiors",
    excerpt: "Take a look inside the world's most opulent private aircraft with custom-designed luxury amenities.",
    content: `The world of private aviation has always been synonymous with luxury, but today's most exclusive private jet interiors are pushing the boundaries of opulence and sophistication to unprecedented heights.

## The Art of Custom Design

Modern private jet interiors are no longer just about comfort—they're about creating a truly personalized flying experience that reflects the owner's unique style and preferences. From hand-stitched leather seating to custom wood veneers, every detail is carefully crafted to perfection.

## Cutting-Edge Amenities

Today's luxury private jets feature amenities that rival the finest hotels and resorts. From full-size bedrooms with en-suite bathrooms to gourmet kitchens and entertainment systems, these aircraft offer everything needed for the ultimate in comfort and convenience.

## Sustainable Luxury

Even in the world of ultra-luxury, sustainability is becoming increasingly important. Many of today's most exclusive private jets incorporate eco-friendly materials and energy-efficient systems without compromising on luxury or performance.

## The Future of Luxury Aviation

As technology continues to advance, we can expect to see even more innovative and luxurious private jet interiors that push the boundaries of what's possible in aviation design.`,
    date: "March 18, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=450&fit=crop&crop=center",
    category: "Luxury",
    tags: ["luxury", "interiors", "design", "customization"],
    published: true,
    scheduled: false,
    seoTitle: "Luxury Private Jet Interiors: The Most Exclusive Aircraft Designs",
    seoDescription: "Explore the world's most opulent private jet interiors featuring custom designs, cutting-edge amenities, and sustainable luxury materials.",
    seoKeywords: ["private jet interiors", "luxury aviation", "custom aircraft", "jet design"],
    author: "Managerius Team",
    views: 892,
    likes: 67,
    createdAt: "2025-03-18T10:00:00Z",
    updatedAt: "2025-03-18T10:00:00Z"
  },
  {
    id: "business-aviation-trends",
    title: "Business Aviation Trends: What Executives Need to Know",
    excerpt: "How private aviation is evolving to meet the demands of modern business travel and productivity.",
    content: `The business aviation industry is experiencing unprecedented growth and transformation, driven by changing work patterns, technological advances, and evolving executive expectations.

## The Rise of Hybrid Work

As remote and hybrid work becomes the norm, executives are increasingly relying on private aviation to maintain productivity while traveling. Modern business jets are equipped with advanced connectivity and workspace solutions that enable seamless work-from-anywhere experiences.

## Technology Integration

Today's business aircraft are becoming flying offices, equipped with high-speed internet, video conferencing capabilities, and integrated productivity tools that allow executives to conduct business as effectively in the air as they would in their corporate headquarters.

## Sustainability in Business Aviation

Corporate sustainability goals are driving demand for more environmentally responsible aviation solutions. Companies are increasingly seeking carbon-neutral flight options and sustainable aviation fuels to align with their environmental commitments.

## The Future of Business Travel

As we look ahead, business aviation will continue to evolve to meet the changing needs of modern executives, with a focus on efficiency, sustainability, and seamless connectivity.`,
    date: "March 15, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=450&fit=crop&crop=center",
    category: "Business",
    tags: ["business", "trends", "productivity", "executives"],
    published: true,
    scheduled: false,
    seoTitle: "Business Aviation Trends 2024: What Executives Need to Know",
    seoDescription: "Discover the latest trends in business aviation including hybrid work solutions, technology integration, and sustainability initiatives for modern executives.",
    seoKeywords: ["business aviation", "executive travel", "private jets", "corporate aviation"],
    author: "Managerius Team",
    views: 1156,
    likes: 78,
    createdAt: "2025-03-15T10:00:00Z",
    updatedAt: "2025-03-15T10:00:00Z"
  },
  {
    id: "private-jet-etiquette",
    title: "The Art of Private Jet Etiquette",
    excerpt: "Essential guidelines for first-time private jet travelers and seasoned flyers alike.",
    content: `Private jet travel offers an unparalleled level of luxury and convenience, but it also comes with its own set of etiquette guidelines that ensure a smooth and enjoyable experience for all passengers.

## Boarding and Departure

Arriving on time is crucial in private aviation, as delays can affect not just your flight but potentially other passengers' schedules. Most private jet terminals offer expedited security and customs processes, but it's still important to arrive with adequate time for pre-flight preparations.

## In-Flight Etiquette

While private jets offer more relaxed environments than commercial flights, certain etiquette guidelines help maintain the sophisticated atmosphere. This includes being respectful of other passengers' space, keeping noise levels appropriate, and following the crew's instructions.

## Dress Code Considerations

While private jet travel is generally more casual than commercial aviation, it's important to dress appropriately for the occasion and the other passengers. When in doubt, business casual is usually a safe choice.

## Tipping and Gratuity

Tipping practices in private aviation can vary, but it's generally appreciated to tip the crew for exceptional service. The amount is typically discretionary and based on the length of the flight and the level of service provided.

## Making the Most of Your Experience

Private jet travel is about more than just transportation—it's about the experience. Take time to appreciate the luxury amenities, enjoy the personalized service, and make the most of the unique opportunities that private aviation provides.`,
    date: "March 12, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=800&h=450&fit=crop&crop=center",
    category: "Travel Tips",
    tags: ["etiquette", "travel", "tips", "guidelines"],
    published: true,
    scheduled: false,
    seoTitle: "Private Jet Etiquette: Essential Guidelines for Luxury Travel",
    seoDescription: "Master the art of private jet etiquette with our comprehensive guide covering boarding, in-flight behavior, dress codes, and tipping practices.",
    seoKeywords: ["private jet etiquette", "luxury travel", "aviation manners", "jet travel tips"],
    author: "Managerius Team",
    views: 743,
    likes: 45,
    createdAt: "2025-03-12T10:00:00Z",
    updatedAt: "2025-03-12T10:00:00Z"
  },
  {
    id: "global-hotspots-2024",
    title: "Global Hotspots: Where the Elite Are Flying in 2024",
    excerpt: "Discover the trending destinations that are attracting private jet travelers this year.",
    content: `The world of private aviation is constantly evolving, with new destinations emerging as hotspots for elite travelers. In 2024, several locations have captured the attention of private jet enthusiasts worldwide.

## European Renaissance

Europe continues to be a major destination for private aviation, with cities like Monaco, St. Moritz, and the French Riviera remaining perennial favorites. However, emerging destinations like Porto, Portugal, and the Greek islands are gaining popularity among discerning travelers.

## Asian Markets

Asia's private aviation market is experiencing rapid growth, with destinations like Singapore, Hong Kong, and Tokyo leading the way. The region's economic growth and increasing wealth are driving demand for private aviation services.

## Middle Eastern Luxury

The Middle East remains a key market for private aviation, with Dubai, Abu Dhabi, and Riyadh serving as major hubs. These cities offer world-class facilities and services that cater to the most demanding private aviation clients.

## Emerging Destinations

Several emerging destinations are attracting attention from private jet travelers, including the Caribbean islands, the Maldives, and various African safari destinations. These locations offer unique experiences that can't be replicated elsewhere.

## The Future of Private Aviation Destinations

As the industry continues to grow, we can expect to see new destinations emerge and existing ones evolve to meet the changing needs and preferences of private aviation clients.`,
    date: "March 10, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop&crop=center",
    category: "Destinations",
    tags: ["destinations", "travel", "elite", "hotspots"],
    published: true,
    scheduled: false,
    seoTitle: "Global Hotspots 2024: Where the Elite Are Flying This Year",
    seoDescription: "Explore the trending destinations attracting private jet travelers in 2024, from European hotspots to emerging Asian markets and luxury destinations.",
    seoKeywords: ["private jet destinations", "luxury travel", "elite travel", "jet travel 2024"],
    author: "Managerius Team",
    views: 1567,
    likes: 112,
    createdAt: "2025-03-10T10:00:00Z",
    updatedAt: "2025-03-10T10:00:00Z"
  },
  {
    id: "private-jet-safety",
    title: "Behind the Scenes: Private Jet Operations and Safety",
    excerpt: "An insider look at the rigorous safety standards and operational excellence in private aviation.",
    content: `Private aviation is built on a foundation of safety and operational excellence that goes far beyond what most passengers ever see. Behind the scenes, a complex network of professionals works tirelessly to ensure every flight meets the highest safety standards.

## Rigorous Safety Standards

Private aviation operates under some of the most stringent safety regulations in the industry. From pilot training and certification to aircraft maintenance and inspection, every aspect of private aviation is subject to rigorous oversight and continuous improvement.

## Advanced Technology

Modern private jets are equipped with cutting-edge safety technology, including advanced weather radar, terrain awareness systems, and automated flight management systems that help pilots navigate safely in all conditions.

## Crew Training and Certification

Private aviation crews undergo extensive training and certification processes that often exceed commercial aviation standards. This includes regular simulator training, emergency procedures practice, and ongoing education to stay current with the latest safety protocols.

## Maintenance Excellence

Aircraft maintenance in private aviation is conducted by highly skilled technicians using the most advanced tools and techniques. Every component is inspected, tested, and maintained to the highest standards to ensure optimal performance and safety.

## The Human Factor

While technology plays a crucial role in aviation safety, the human factor remains paramount. Private aviation crews are selected not just for their technical skills, but for their ability to make sound decisions under pressure and provide exceptional service while maintaining the highest safety standards.

## Continuous Improvement

Safety in private aviation is not a destination but a journey. The industry is constantly evolving, with new technologies, procedures, and best practices being developed and implemented to ensure that private aviation remains one of the safest forms of transportation available.`,
    date: "March 8, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&h=450&fit=crop&crop=center",
    category: "Safety",
    tags: ["safety", "operations", "standards", "aviation"],
    published: true,
    scheduled: false,
    seoTitle: "Private Jet Safety: Behind the Scenes of Aviation Excellence",
    seoDescription: "Get an insider look at the rigorous safety standards, advanced technology, and operational excellence that make private aviation one of the safest forms of travel.",
    seoKeywords: ["private jet safety", "aviation safety", "jet operations", "flight safety"],
    author: "Managerius Team",
    views: 934,
    likes: 56,
    createdAt: "2025-03-08T10:00:00Z",
    updatedAt: "2025-03-08T10:00:00Z"
  }
];

// Utility function to parse markdown to HTML
export const parseMarkdownToHtml = (markdown: string): string => {
  if (!markdown) return '';
  
  // Configure marked options
  marked.setOptions({
    breaks: true,
    gfm: true,
    headerIds: false,
    mangle: false
  });
  
  return marked(markdown);
};

// Blog data management functions
export class BlogDataManager {
  private static STORAGE_KEY = 'jetset_blog_posts';

  static getBlogPosts(): BlogPost[] {
    if (typeof window === 'undefined') return defaultBlogPosts;
    
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return defaultBlogPosts;
      }
    }
    
    // Initialize with default data
    this.saveBlogPosts(defaultBlogPosts);
    return defaultBlogPosts;
  }

  static saveBlogPosts(posts: BlogPost[]): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(posts));
  }

  static getBlogPost(id: string): BlogPost | null {
    const posts = this.getBlogPosts();
    return posts.find(post => post.id === id) || null;
  }

  static addBlogPost(post: Omit<BlogPost, 'createdAt' | 'updatedAt'>): BlogPost {
    const posts = this.getBlogPosts();
    const now = new Date().toISOString();
    const newPost: BlogPost = {
      ...post,
      tags: post.tags || [],
      scheduled: post.scheduled || false,
      author: post.author || 'Managerius Team',
      views: post.views || 0,
      likes: post.likes || 0,
      createdAt: now,
      updatedAt: now
    };
    
    posts.unshift(newPost); // Add to beginning
    this.saveBlogPosts(posts);
    return newPost;
  }

  static updateBlogPost(id: string, updates: Partial<Omit<BlogPost, 'id' | 'createdAt'>>): BlogPost | null {
    const posts = this.getBlogPosts();
    const index = posts.findIndex(post => post.id === id);
    
    if (index === -1) return null;
    
    posts[index] = {
      ...posts[index],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    
    this.saveBlogPosts(posts);
    return posts[index];
  }

  static deleteBlogPost(id: string): boolean {
    const posts = this.getBlogPosts();
    const filteredPosts = posts.filter(post => post.id !== id);
    
    if (filteredPosts.length === posts.length) return false;
    
    this.saveBlogPosts(filteredPosts);
    return true;
  }

  static getPublishedPosts(): BlogPost[] {
    return this.getBlogPosts().filter(post => post.published);
  }
}
