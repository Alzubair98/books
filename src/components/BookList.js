import React from "react";

const BookList = ({ books }) => {
  return (
    <div>
      <h1>{books.length}</h1>
    </div>
  );
};

export default BookList;
