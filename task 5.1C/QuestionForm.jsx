function QuestionForm() {
  return (
    <div style={{ marginTop: "20px" }}>
      <h1 style={{ backgroundColor: "lightgray", padding: "8px" }}>
        What do you want to ask or share
      </h1>
      <p style={{ margin: "10px 0" }}>
        This section is designed based on the type of the post. It could be developed by conditional rendering. 
        <span style={{ color: "red" }}> For posting a question, the following section will appear.</span>
      </p>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>Title</label>
        <input
          type="text"
          placeholder="Start your question with how, what, why, etc."
          style={{
            width: "100%",padding: "8px",
            border: "1px solid black",
          }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>Describe your problem</label>
        <textarea
          style={{width: "100%",height: "150px",padding: "8px",border: "1px solid black",}}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>Tags</label>
        <input
          type="text"
          placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"
          style={{width: "100%", padding: "8px", border: "1px solid black", }}
        />
      </div>

      <div style={{ textAlign: "right" }}>
        <button
          style={{ backgroundColor: "lightgray", padding: "8px 20px",border: "none",fontWeight: "bold",cursor: "pointer",}}
        >
          Post
        </button>
      </div>
    </div>
  );
}
export default QuestionForm;
