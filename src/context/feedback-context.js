import React, { useState } from "react";
import data from "../db.json";
import { v4 as uuid } from "uuid";
const FeedbackContext = React.createContext({
  reviews: data.feedback,
  deleteReview: () => {},
  addReview: () => {},
  feedbackEditFn: () => {},
  feedbackEditValue:{},
  updateFeedback:()=>{}
});

export const FeedbackContextProvider = (props) => {
  const [reviewsArray, setReviewsArray] = useState(data.feedback);
  const [editFeedback, setEditFeedback] = useState({ item: {}, edit: false });

  const handleDeleteReview = (id) => {
    if (window.confirm("are you sure?")) {
      let temp = [...reviewsArray];
      setReviewsArray(temp.filter((item) => item.id !== id));
    }
  };
  const handleAddReview = (obj) => {
    obj.id = uuid();
    let temp = [...reviewsArray, obj];
    setReviewsArray(temp);
  };    
  const handleEditFeedBack = (item) => {
    console.log(item)
    setEditFeedback({
      item: item,
      edit: true,
    });
  };
  const updateEditedFeedback=(id,item)=>{
    let temp=[...reviewsArray]
        let ind= temp.findIndex(a=>a.id === id)
        temp[ind]=item
        setReviewsArray(temp)
  }
  const contextValue = {
    reviews: reviewsArray,
    deleteReview: handleDeleteReview,
    addReview: handleAddReview,
    feedbackEdit: handleEditFeedBack,
    feedbackEditValue:editFeedback,
    updateFeedback:updateEditedFeedback
  };
  return (
    <FeedbackContext.Provider value={contextValue}>
      {props.children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
