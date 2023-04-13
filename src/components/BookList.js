import React from "react";
import BookShow from "./BookShow";
import useBooksContext from "../hooks/use_books_context";

const BookList = () => {
  const { books } = useBooksContext();
  return (
    <div className="book-list">
      {books.map((book) => {
        return <BookShow key={book.id} book={book} />;
      })}
    </div>
  );
};

export default BookList;
