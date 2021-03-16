import React from 'react';
import { Container, Typography, Grid, TextField } from '@material-ui/core';
import TheHeader from '../components/TheHeader';

const AddBook = () => {
  return (
    <Container>
      <TheHeader />
      <Typography style={{ marginTop: '80px' }} variant="h3">
        Adicione um novo livro
      </Typography>
      <Grid container>

        <Grid item>
          <TextField label="título" variant="outlined" />
          

        </Grid>

      </Grid>
    </Container>
  );
};

export default AddBook;
