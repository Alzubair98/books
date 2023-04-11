import React, { useContext } from "react";
import BooksContext from "../context/books";
import BookShow from "./BookShow";

const BookList = ({ books, onDelete, onEdit }) => {
  const value = useContext(BooksContext);

  return (
    <div className="book-list">
      <h1>{value}</h1>
      {books.map((book) => {
        return (
          <BookShow
            key={book.id}
            book={book}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        );
      })}
    </div>
  );
};

export default BookList;
