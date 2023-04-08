import React, { useState } from "react";

const BookEdit = () => {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("new title and author", title, author);
  };
  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>Author</label>
      <input value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button type="submit" className="button is-primary">
        Save
      </button>
    </form>
  );
};

export default BookEdit;
