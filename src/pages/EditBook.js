import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Typography, TextField, Card, Button, Box } from '@material-ui/core';
import TheHeader from '../components/TheHeader';

import { makeStyles } from '@material-ui/core/styles';

import { addBook } from '../utils/firebase';

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

const EditBook = () => {
  const classes = useStyles();
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [imgURL, setImgURL] = useState('');

  const handleSubmit = async (event) => {
    console.log('clicked');
    const result = await addBook({
      title,
      author,
      category,
      imgURL,
      rating: { henrique: 0, fernando: 0 },
      readBy: [''],
    });

    if (result) {
      console.log('yes!!', result);
      setTitle('');
      setAuthor('');
      setCategory('');
      setImgURL('');
      history.push('/books');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
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
        <Typography variant="h5">Edite seu livro</Typography>

        <Box className={classes.inputBox}>
          <TextField
            name="title"
            label="Título"
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
            label="Autor"
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
            label="Categoria"
            variant="outlined"
            margin="normal"
            fullWidth
            autoComplete="off"
            required
            onChange={handleChange}
          />
          <TextField
            name="imgURL"
            label="Imagem da Capa (URL)"
            variant="outlined"
            margin="normal"
            fullWidth
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

export default EditBook;
