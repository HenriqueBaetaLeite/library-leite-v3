import React, { useState } from 'react';

import BooksBL from './index';

const BooksContext = ({ children }) => {
  const [books, setBooks] = useState([]);

  const getMyBooks = (data) => {
    setBooks(data);
  };

  const value = { books, getMyBooks };
  return <BooksBL.Provider value={value}>{children}</BooksBL.Provider>;
};

export default BooksContext;
