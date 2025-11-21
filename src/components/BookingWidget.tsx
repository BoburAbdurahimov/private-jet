const BookingWidget = () => {
  return (
    <div className="w-full my-8">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-6 md:p-8">
            <h2 className="font-serif text-3xl mb-6 text-center">Book Your Private Jet</h2>
            <div className="w-full" style={{ minHeight: '600px' }}>
              <iframe
                src="https://jetluxe.jetlink.app/affiliate/valens/widget/5e3b77ba-0ee5-468b-9273-840ab967a864?signature=6c7081fa54b5895b17350934f2db8c093149c0c54ff22772f75dfa261c76f36b"
                frameBorder="0"
                allowFullScreen
                className="w-full h-full min-h-[600px] rounded-lg"
                title="JetLuxe Booking Widget"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingWidget;

