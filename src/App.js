import { useState } from "react";
import "./App.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title, author) => {
    setBooks([...books, { id: books.length, title, author }]);
  };

  return (
    <div className="App">
      <BookCreate onCreate={createBook} />
      <BookList books={books} />
    </div>
  );
}

export default App;
