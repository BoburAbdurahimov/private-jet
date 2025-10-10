export const Marquee = () => {
  const text = "Fly Managerius";
  const repeatedText = Array(40).fill(text);

  return (
    <div className="relative overflow-hidden border-y border-border bg-secondary py-8">
      <div className="flex animate-slide-left">
        {repeatedText.map((item, index) => (
          <span
            key={index}
            className="text-4xl md:text-6xl font-serif font-bold mx-8 whitespace-nowrap text-muted-foreground/30"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
