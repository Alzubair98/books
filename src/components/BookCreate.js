import React, { useState, useRef } from "react";

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title, author);
    setTitle("");
    setAuthor("");
  };

  return (
    <div className="book-create">
      <h1>Add a Book</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          className="input"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Author</label>
        <input
          className="input"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button className="button" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default BookCreate;
