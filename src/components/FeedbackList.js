import React,{useContext} from "react";

import FeedbackCard from "./FeedbackCard";

import PropTypes from "prop-types";
import FeedbackContext from "../context/feedback-context";
function FeedbackList() {
  const feedbackCtx=useContext(FeedbackContext)
  if (feedbackCtx.reviews.length === 0) {
    return <p>no feed back data</p>;
  }
const handleDel=(id)=>{
  feedbackCtx.deleteReview(id)
}
  return (
    <div className="feedback-list">
      {feedbackCtx.reviews.map((item,index) => (
        <FeedbackCard item={item} key={index}  handleDel={handleDel}/>
      ))}
    </div>
  );
}
// FeedbackList.propTypes = {
//   feedbackCtx.reviews: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       rating: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//     })
//   ),
// };

export default FeedbackList;
