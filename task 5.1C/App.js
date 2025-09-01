import './App.css';
import React, { useState } from "react";
import NewPostPage from './NewPostPage';
import QuestionForm from "./QuestionForm";
import Article from "./Article";

function App() {
  const [postType, setPostType] = useState("");

  return (
    <div className="App">
      <NewPostPage
        postType={postType}
        setPostType={setPostType}
      />

      {postType === "question" ? (
        <QuestionForm />
      ) : postType === "article" ? (
        <Article />
      ) : null}
    </div>
  );
}

export default App;
