import React, { useState } from 'react';
import { Typography, Paper } from '@material-ui/core';

const CardBook = ({ book }) => {
  const [flip, setFlip] = useState(false);

  const hoverCard = () => {
    setFlip(!flip);
  };

  return (
    <Paper variant="elevation" elevation={3}>
      <Typography variant="h5">{book.title}</Typography>
      <p>{book.author}</p>
      <img
        onMouseEnter={hoverCard}
        // onMouseLeave={hoverCard}
        src={book.imgURL}
        alt={book.title}
        height="110px"
      />
    </Paper>
  );
};

export default CardBook;
