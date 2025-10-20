interface ArticleSchemaProps {
  title: string;
  description: string;
  coverImage: string;
  date: string;
  canonical: string;
}

const ArticleSchema = ({ 
  title, 
  description, 
  coverImage, 
  date, 
  canonical 
}: ArticleSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": [coverImage],
    "author": {
      "@type": "Organization",
      "name": "Managerius"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Managerius",
      "logo": {
        "@type": "ImageObject",
        "url": "https://managerius.com/logo.png"
      }
    },
    "datePublished": date,
    "dateModified": date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonical
    }
  };

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ArticleSchema;
