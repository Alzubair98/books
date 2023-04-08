import React from "react";

const BookShow = ({ book, onDelete }) => {
  const handleDelete = (e) => {
    onDelete(e.target.id);
  };

  return (
    <div className="book-show">
      <button id={book.id} type="submit" onClick={handleDelete}>
        X
      </button>
      <h2>Book Title: {book.title}</h2>
      <h2>Book Author: {book.author}</h2>
    </div>
  );
};

export default BookShow;
