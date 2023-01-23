import React, { useState } from 'react';
import styles from "./StarRating.css"
function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
            <i className={`fa fa-star ${ratingValue <= (hover || rating) ? 'checked' : ''}`} />
          </label>
        );
      })}
    </div>
  );
}

export default StarRating;
