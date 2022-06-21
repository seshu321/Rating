import React, { useContext } from "react";
import PropTypes from "prop-types";
import FeedbackContext from "../context/feedback-context";

function FeedbackStats() {
  const feedbackCtx = useContext(FeedbackContext);
  let data = feedbackCtx.reviews;
  let avg = data
    .reduce((acc, item) => (acc + item.rating) / data.length, 0)
    .toFixed(1);

  return (
    <div className="feedback-stats">
      <h4>{data.length} Reviews</h4>

      <p>Avg rating:{isNaN(avg) ? 0 : avg}</p>
    </div>
  );
}
// FeedbackStats.propTypes={
//     data:PropTypes.array.isRequired
// }

export default FeedbackStats;
