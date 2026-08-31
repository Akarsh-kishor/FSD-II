import { useState } from "react";

function PostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !body.trim()) {
      alert("Please enter both title and content.");
      return;
    }

    alert("Post created successfully!");

    setTitle("");
    setBody("");
  };

  return (
    <section className="form-section">
      <h2>Create Post</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Write your post..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button type="submit">Create Post</button>
      </form>
    </section>
  );
}

export default PostForm;