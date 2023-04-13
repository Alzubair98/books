import { useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import useBooksContext from "./hooks/use_books_context";
// import { v4 as uuidv4 } from "uuid";

function App() {
  const { fetchBooks } = useBooksContext();

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <span>
        <strong>
          The api im using dose not support edit function so the edit will not
          be saved
        </strong>
      </span>
      <BookCreate />
      <BookList />
    </div>
  );
}

export default App;
