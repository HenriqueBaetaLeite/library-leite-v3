import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Typography, Grid, CircularProgress } from '@material-ui/core';

import TheHeader from '../components/TheHeader';

import { auth } from '../utils/firebase';

import MyCard from '../components/MyCard';

import BooksBL from '../context';

const Books = () => {
  const history = useHistory();
  const { books } = useContext(BooksBL);
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) return history.push('/login');
      console.log('tem user? Books', user);
      setUser(user.email);
    });
  }, []);

  return (
    <Container>
      <TheHeader />
      <Typography variant="h3">Coletânia de Livros</Typography>
      <Grid style={{ marginTop: '30px' }} container spacing={3}>
        {books.length <= 0 ? (
          <CircularProgress />
        ) : (
          books.map((book) => (
            <Grid item xs={12} sm={6} md={4} key={book.title}>
              <MyCard
                title={book.title}
                imgSrc={book.imgURL}
                author={book.author}
                category={book.category}
                rating={book.rating}
                readBy={book.readBy}
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
