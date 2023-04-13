import React, { useState } from "react";

import useBooksContext from "../hooks/use_books_context";

const BookCreate = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const { createBook } = useBooksContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(title, author, category);
    setTitle("");
    setAuthor("");
    setCategory("");
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
        <label>Category</label>
        <input
          className="input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button className="button" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default BookCreate;
