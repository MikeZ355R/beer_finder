import React from "react";
import "./StoreDisplayRating.css";

function StoreDisplayRating({rating}) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div >
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`} className="fa fa-star checked"></span>
      ))}
      {hasHalfStar && <span className="fa fa-star-half-o checked"></span>}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`} className="fa fa-star"></span>
      ))}
    </div>
  );
};

export default StoreDisplayRating;