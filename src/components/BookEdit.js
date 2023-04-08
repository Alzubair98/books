import React from "react";

const BookEdit = () => {
  return (
    <form className="book-edit">
      <label>Title</label>
      <input />
      <label>Author</label>
      <input />
      <button type="submit" className="button is-primary">
        Save
      </button>
    </form>
  );
};

export default BookEdit;
