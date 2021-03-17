import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Typography, Grid, CircularProgress, Box } from '@material-ui/core';

import TheHeader from '../components/TheHeader';

import { auth, getAllBooks } from '../utils/firebase';

import MyCard from '../components/MyCard';

const Books = () => {
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    getAllBooks().then(async (resp) => setAllBooks(resp));

    auth.onAuthStateChanged((user) => {
      if (!user) return history.push('/login');
      setUser(user.email);
    });
  }, [allBooks]);

  return (
    <Container>
      <TheHeader />
      <Typography variant="h3">Coletânia de Livros</Typography>
      <Grid style={{ marginTop: '30px' }} container spacing={4}>
        {allBooks.length <= 0 ? (
          <Box component="div" className="d-flex">
            <CircularProgress />
          </Box>
        ) : (
          allBooks.map((book) => (
            <Grid item xs={12} sm={6} md={4} key={book.id}>
              <MyCard
                title={book.title}
                imgSrc={book.imgURL}
                author={book.author}
                category={book.category}
                rating={book.rating}
                // readBy={book.readBy}
                id={book.id}
                user={user}
              />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default Books;
