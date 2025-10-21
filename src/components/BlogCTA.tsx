import { ArrowRight, Plane } from "lucide-react";

const BlogCTA = () => {
  return (
    <div className="bg-card border border-border rounded-lg p-8 mb-12 mt-12">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Plane className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-serif text-3xl font-semibold">Ready to elevate your travel?</h3>
        </div>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Explore private aviation insights, tools, and partners on Managerius.
        </p>
        <a 
          href="https://managerius.com" 
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors shadow-lg"
          style={{
            backgroundColor: '#2563eb',
            color: 'white',
            textDecoration: 'none',
            border: 'none'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#1d4ed8';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#2563eb';
          }}
        >
          Explore on Managerius.com
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default BlogCTA;
