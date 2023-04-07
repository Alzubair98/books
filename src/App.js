import { useState } from "react";
import "./App.css";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);
  return (
    <div className="App">
      <h1>hello</h1>
      <BookCreate />
    </div>
  );
}

export default App;
