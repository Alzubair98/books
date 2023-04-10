import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
// import { v4 as uuidv4 } from "uuid";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");

    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const createBook = async (title, author) => {
    // setBooks([...books, { id: uuidv4(), title, author }]); create book in set it in the state

    //add book to dblClick.json

    const response = await axios.post("http://localhost:3001/books", {
      title,
      author,
    });

    setBooks([...books, response.data]);
  };

  const EditBook = async (id, newtitle, newauthor) => {
    setBooks(
      books.map((book) => {
        if (book.id === id) {
          return { ...book, title: newtitle, author: newauthor };
        }
        return book;
      })
    );

    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newtitle,
      author: newauthor,
    });
  };

  const DeleteBookById = async (id) => {
    setBooks(
      books.filter((book) => {
        return book.id !== id;
      })
    );

    const response = await axios.delete(`http://localhost:3001/books/${id}`);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookCreate onCreate={createBook} />
      <BookList books={books} onDelete={DeleteBookById} onEdit={EditBook} />
    </div>
  );
}

export default App;
