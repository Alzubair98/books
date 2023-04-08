import React from "react";

const BookShow = ({ book }) => {
  return (
    <div className="book-show">
      <h2>Book Title: {book.title}</h2>
      <h2>Book Author: {book.author}</h2>
    </div>
  );
};

export default BookShow;
