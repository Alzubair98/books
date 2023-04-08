import React from "react";
import BookShow from "./BookShow";

const BookList = ({ books }) => {
  return (
    <div>
      <h1>{books.length}</h1>
      {books.map((book) => {
        return <BookShow key={book.id} book={book} />;
      })}
    </div>
  );
};

export default BookList;
