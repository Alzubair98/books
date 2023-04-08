import React, { useState } from "react";

const BookShow = ({ book, onDelete }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    onDelete(book.id);
  };

  console.log(showEdit);

  return (
    <div className="book-show">
      <button className="delete" type="submit" onClick={handleDelete}>
        X
      </button>
      <button className="edit" onClick={() => setShowEdit(!showEdit)}>
        Edit
      </button>
      <h2>Book Title: {book.title}</h2>
      <h2>Book Author: {book.author}</h2>
    </div>
  );
};

export default BookShow;
