import React, { useState } from "react";

const BookEdit = ({ book, handleShow }) => {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [category, setCategory] = useState(book.category);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleShow(book.id, title, author, category);
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>Author</label>
      <input value={author} onChange={(e) => setAuthor(e.target.value)} />
      <label>Category</label>
      <input value={category} onChange={(e) => setCategory(e.target.value)} />
      <button type="submit" className="button is-primary">
        Save
      </button>
    </form>
  );
};

export default BookEdit;
