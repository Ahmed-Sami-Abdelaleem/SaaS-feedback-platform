

export default function StarRating({ rating, setRating }: { rating: number; setRating: (rating: number) => void }) {
  const handleClick = (index:number) => {
    setRating(index + 1);
  };

  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          className={`text-2xl ${
            index < rating ? "text-black" : "text-gray-300"
          }`}
        >
          ★
        </button>
      ))}
    </div>
  );
}