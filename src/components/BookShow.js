import React, { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    onDelete(book.id);
  };

  const handleShow = (id, title, author) => {
    onEdit(id, title, author);
    setShowEdit(false);
  };

  return (
    <div className="book-show">
      <button className="delete" type="submit" onClick={handleDelete}>
        X
      </button>
      <button className="edit" onClick={() => setShowEdit(!showEdit)}>
        Edit
      </button>
      {!showEdit ? (
        <div>
          <h2>Book Title: {book.title}</h2>
          <h2>Book Author: {book.author}</h2>{" "}
        </div>
      ) : (
        <BookEdit book={book} handleShow={handleShow} />
      )}
    </div>
  );
};

export default BookShow;
