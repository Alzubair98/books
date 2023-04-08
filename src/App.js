import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title, author) => {
    setBooks([...books, { id: uuidv4(), title, author }]);
  };

  const EditBook = (id, newtitle, newauthor) => {
    setBooks(
      books.map((book) => {
        if (book.id === id) {
          return { ...book, title: newtitle, author: newauthor };
        }
        return book;
      })
    );
  };

  const DeleteBookById = (id) => {
    setBooks(
      books.filter((book) => {
        return book.id !== id;
      })
    );
  };

  return (
    <div className="app">
      <BookCreate onCreate={createBook} />
      <BookList books={books} onDelete={DeleteBookById} onEdit={EditBook} />
    </div>
  );
}

export default App;
