import { useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import useBooksContext from "./hooks/use_books_context";
import "./app.css";
// import { v4 as uuidv4 } from "uuid";

function App() {
  const { fetchBooks } = useBooksContext();

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <div className="text-warning">
        The api im using dose not support edit function so the edit will not be
        saved
      </div>
      <BookCreate />
      <BookList />
    </div>
  );
}

export default App;
