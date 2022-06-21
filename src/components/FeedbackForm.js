import React, { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/feedback-context";
import Button from "./Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm() {
  const feedbackCtx = useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newObj = {
      text,
      rating,
    };
    if (feedbackCtx.feedbackEditValue.edit === true) {
      feedbackCtx.updateFeedback(feedbackCtx.feedbackEditValue.item.id, newObj);
    } else {
      feedbackCtx.addReview(newObj);
    }
  };
  useEffect(() => {
    if (feedbackCtx.feedbackEditValue.edit === true) {
      setBtnDisabled(false);
      setText(feedbackCtx.feedbackEditValue.item.text);
      setRating(feedbackCtx.feedbackEditValue.item.rating);
    }
  }, [feedbackCtx.feedbackEditValue]);
  const handleTextChange = (e) => {
    let value = e.target.value;
    setText(e.target.value);
    if (value.length === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (value.length !== 0 && value.length <= 10) {
      setMessage("text must be atleast 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
  };
  const handleRating = (num) => {
    setRating(num);
  };

  return (
    <div className="card">
      <form className="form" onSubmit={handleSubmit}>
        <h2>how would you rate our service</h2>
        <RatingSelect handleRating={handleRating} selected={rating} />
        <div className="input-group">
          <input
            type="text"
            placeholder="write your review"
            onChange={handleTextChange}
            value={text}
          />
          <Button type="submit" version="secondary" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        <small>{message}</small>
      </form>
    </div>
  );
}

export default FeedbackForm;
