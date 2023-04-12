import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";
// import { v4 as uuidv4 } from "uuid";

function App() {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">

      <h1>Reading List (the project is using local server to save the data, i will
        modifiy it soon)</h1>
      <BookCreate />
      <BookList />

    </div>
  );
}

export default App;
