import React, { useState } from "react";

function RatingSelect({ handleRating, selected }) {
  const handleChange = (e) => {
    console.log(e.target.value);

    handleRating(+e.target.value);
  };

  return (
    <ul className="rating">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <li key={`rating-${i} `}>
          <input
            type="radio"
            id={`num${i}`}
            name="rating"
            className={`radio`}
            value={i}
            onChange={handleChange}
            checked={selected === i}
          />
          <label htmlFor={`num${i}`}>{i}</label>
        </li>
      ))}
    </ul>
  );
}

export default RatingSelect;
