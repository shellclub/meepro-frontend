import { useEffect, useState } from "react";

const RatingComponent = ({ onChange, value }) => {
  const [currentRating, setCurrentRating] = useState(value);

  useEffect(() => {
    setCurrentRating(value); // Update currentRating when value changes
  }, [value]);

  // Function to handle mouse click on a star
  const handleClick = (rating: number) => {
    setCurrentRating(rating);
    onChange(rating);
  };

  return (
    <div className="gi-ratting-star">
      <span>Your rating:</span>
      <div className="gi-t-review-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <i
            key={star}
            className={`gicon gi-star ${
              currentRating >= star ? "fill" : "gi-star-o"
            }`}
            onClick={() => handleClick(star)}
          ></i>
        ))}
      </div>
    </div>
  );
};

export default RatingComponent;
