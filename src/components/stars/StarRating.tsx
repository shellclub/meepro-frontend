import React from "react";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const stars: React.JSX.Element[] = [];

  for (let i = 0; i < 5; i++) {
    const isFilled = i < rating;
    stars.push(
      <i key={i} className={`gicon gi-star ${isFilled ? "fill" : ""}`}></i>
    );
  }

  return <span className="gi-pro-rating">{stars}</span>;
};

export default StarRating;

