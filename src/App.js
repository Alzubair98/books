import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title, author) => {
    setBooks([...books, { id: uuidv4(), title, author }]);
  };

  console.log(books);

  const DeleteBookById = (id) => {};

  return (
    <div className="app">
      <BookCreate onCreate={createBook} />
      <BookList books={books} />
    </div>
  );
}

export default App;
