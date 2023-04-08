import { useState } from "react";
import "./App.css";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title, author) => {
    setBooks([...books, { id: books.length, title, author }]);
  };

  console.log(books);

  return (
    <div className="App">
      <h1>hello</h1>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
