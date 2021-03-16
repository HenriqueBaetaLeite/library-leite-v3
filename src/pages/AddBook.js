import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  FormControl,
  Card,
  Button,
  Box,
} from '@material-ui/core';
import TheHeader from '../components/TheHeader';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    padding: '15px',
    marginTop: '80px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputBox: {
    marginTop: '20px',
    marginBottom: '30px',
  },
  button: {
    marginTop: '40px',
  },
});

const AddBook = () => {
  const classes = useStyles();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [imgURL, setImgURL] = useState('');

  const handleSubmit = (event) => {
    console.log('clicked');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'author':
        setAuthor(value);
        break;
      case 'category':
        setCategory(value);
        break;
      default:
        setImgURL(value);
        break;
    }
  };
  return (
    <Container maxWidth="xs">
      <TheHeader />

      <Card className={classes.card}>
        <Typography variant="h5">Adicione um novo livro</Typography>

        <Box className={classes.inputBox}>
          <TextField
            name="title"
            label="título"
            variant="outlined"
            margin="normal"
            fullWidth
            autoFocus
            autoComplete="off"
            required
            onChange={handleChange}
          />

          <TextField
            name="author"
            label="autor"
            variant="outlined"
            margin="normal"
            fullWidth
            autoComplete="off"
            required
            onChange={handleChange}
          />
          <Typography color="textSecondary" variant="caption">
            Mais de 1 autor? Separe por vírgula.
          </Typography>
          <TextField
            name="category"
            label="categoria"
            variant="outlined"
            margin="normal"
            fullWidth
            autoComplete="off"
            required
            onChange={handleChange}
          />
          <TextField
            name="imgURL"
            label="imagem (URL)"
            variant="outlined"
            margin="normal"
            fullWidth
            // error
            // helperText={'errado!'}
            autoComplete="off"
            required
            onChange={handleChange}
          />
          <Button
            className={classes.button}
            fullWidth
            onClick={handleSubmit}
            variant="contained"
            color="primary"
          >
            Adicionar
          </Button>
        </Box>
      </Card>
    </Container>
  );
};

export default AddBook;
