function NewPostPage({ postType, setPostType }) {
  return (
    <div>
      <h1 style={{ backgroundColor: "lightgray", padding: "8px" }}>New Post</h1>

      <div style={{ display: "flex", alignItems: "center", gap: "15px", margin: "10px 0" }}>
        <p>Select Post Type:</p>

        <label>
          <input
            type="radio"
            value="question"
            checked={postType === "question"}
            onChange={() => setPostType("question")}
          />{" "}
          Question
        </label>

        <label>
          <input
            type="radio"
            value="article"
            checked={postType === "article"}
            onChange={() => setPostType("article")}
          />{" "}
          Article
        </label>
      </div>
    </div>
  );
}

export default NewPostPage;
