import React, { Children, useEffect, useState,useContext } from "react";
import PropTypes from "prop-types";
import { FaBeer, FaTimes,FaEdit } from "react-icons/fa";
import FeedbackContext from "../context/feedback-context";
function FeedbackCard({ item, reverse, handleDel }) {
  const feedbackCtx = useContext(FeedbackContext);
  const handleClick = () => {};
  const handleDelItem = (id) => {
    handleDel(id);
  };
  return (
    <section className={`card center  ${reverse && "reverse"}`}>
      <div className="numberContainer center">{item.rating}</div>
      <div className="close center">
        <button onClick={() => handleDelItem(item.id)}>
          <FaTimes />
        </button>
        <button onClick={() => feedbackCtx.feedbackEdit(item)}>
          <FaEdit />
        </button>
      </div>
      <div className="card-text">{item.text}</div>
    </section>
  );
}
FeedbackCard.defaultProps = {
  reverse: false,
};

FeedbackCard.propTypes = {
  item: PropTypes.object.isRequired,
  reverse: PropTypes.bool.isRequired,
};
export default FeedbackCard;
