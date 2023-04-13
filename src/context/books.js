import { createContext, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const BooksContext = createContext();

const appId = "t6wT84TuMQse8pHsb6Fm";
const url =
  "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps";

const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get(`${url}/${appId}/books/`);

    const easyData = response.data;
    const data = Object.keys(easyData).map((key) => ({
      id: key,
      ...easyData[key][0],
    }));

    setBooks(data);
  };

  const createBook = async (title, author, category) => {
    const response = await axios.post(`${url}/${appId}/books/`, {
      item_id: uuidv4(),
      title,
      author,
      category,
    });

    const getData = await axios.get(`${url}/${appId}/books/`);

    const easyData = getData.data;
    const data = Object.keys(easyData).map((key) => ({
      id: key,
      ...easyData[key][0],
    }));

    setBooks(data);
  };

  const EditBook = async (id, newtitle, newauthor, newcategory) => {
    // const response = await axios.put(`http://localhost:3001/books/${id}`, {
    //   title: newtitle,
    //   author: newauthor,
    //   category: newcategory,
    // });
    setBooks(
      books.map((book) => {
        if (book.id === id) {
          return {
            ...book,
            title: newtitle,
            author: newauthor,
            category: newcategory,
          };
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

    const response = await axios.delete(`${url}/${appId}/books/${id}`);
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
