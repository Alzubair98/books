import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");

    setBooks(response.data);
  };

  const createBook = async (title, author) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
      author,
    });

    setBooks([...books, response.data]);
  };

  const EditBook = async (id, newtitle, newauthor) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newtitle,
      author: newauthor,
    });
    setBooks(
      books.map((book) => {
        if (book.id === id) {
          return { ...book, ...response.data };
        }
        return book;
      })
    );
  };

  const DeleteBookById = async (id) => {
    setBooks(
      books.filter((book) => {
        return book.id !== id;
      })
    );

    const response = await axios.delete(`http://localhost:3001/books/${id}`);
  };

  const valueToShare = {
    books,
    fetchBooks,
    createBook,
    EditBook,
    DeleteBookById,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
};

export { Provider };
export default BooksContext;
