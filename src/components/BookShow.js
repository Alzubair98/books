import React, { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use_books_context";

const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { EditBook, DeleteBookById } = useBooksContext();

  const handleShow = (id, title, author, category) => {
    EditBook(id, title, author, category);
    setShowEdit(false);
  };

  return (
    <div className="book-show">
      <button
        className="delete"
        type="submit"
        onClick={() => DeleteBookById(book.id)}
      >
        X
      </button>
      <button className="edit" onClick={() => setShowEdit(!showEdit)}>
        Edit
      </button>
      <img alt="books" src="https://picsum.photos/300/200" />
      {!showEdit ? (
        <div>
          <h2>Book Title: {book.title}</h2>
          <h2>Book Author: {book.author}</h2>{" "}
          <h2>Book Category: {book.category}</h2>
        </div>
      ) : (
        <BookEdit book={book} handleShow={handleShow} />
      )}
    </div>
  );
};

export default BookShow;
