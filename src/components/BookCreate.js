import React, { useState, useContext } from "react";
import BooksContext from "../context/books";

const BookCreate = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const { createBook } = useContext(BooksContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(title, author);
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
