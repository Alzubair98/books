import { createContext, useState } from "react";

const BooksContext = createContext();

const Provider = ({ children }) => {
  return <BooksContext.Provider value={6}>{children}</BooksContext.Provider>;
};

export { Provider };
export default BooksContext;
