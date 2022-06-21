import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import React, { useContext, useState } from "react";
import FeedbackCard from "./components/FeedbackCard";
import data from "./db.json";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { v4 as uuid } from "uuid";
import FeedbackContext from "./context/feedback-context";
console.log(data);
function App() {
  const feedbackCtx = useContext(FeedbackContext);

  return (
    <React.Fragment>
      <Header />

      <div className="container">
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
      </div>
    </React.Fragment>
  );
}

export default App;
