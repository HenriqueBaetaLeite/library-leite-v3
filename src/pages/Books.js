import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Typography, Grid } from '@material-ui/core';

import { getAllBooks, auth } from '../utils/firebase';
import CardBook from '../components/CardBook';

const Books = () => {
  const history = useHistory();
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    // const isUser = auth((user) => {
    //   console.log(user);
    //   if (user) {
    //   } else {
    //     history.push('/login');
    //   }
    // });

    getAllBooks().then((resp) => setAllBooks(resp));
  }, []);

  console.log(allBooks);

  return (
    <Container>
      <Typography variant="h3">Coletânia de Livros</Typography>
      <Grid container spacing={3}>
        {allBooks.length > 0 &&
          allBooks.map((book) => (
            <Grid item xs={6} key={book.title}>
              <CardBook book={book} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Books;
