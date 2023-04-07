import { useState } from "react";
import "./App.css";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    console.log("Need to add this title to books list", title);
  };

  return (
    <div className="App">
      <h1>hello</h1>
      <BookCreate createBook={createBook} />
    </div>
  );
}

export default App;
