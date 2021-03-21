import React, { useState } from 'react';

import { Container, Typography, TextField, Card, Button, Box } from '@material-ui/core';

import TheHeader from '../components/TheHeader';
import SuccessAdd from '../components/SuccessAdd';

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

const AddBook = () => {
  const classes = useStyles();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [imgURL, setImgURL] = useState('');
  const [successAdd, setSuccessAdd] = useState(false);

  const handleSubmit = async () => {
    await addBook({
      title,
      author,
      category,
      imgURL,
      rating: { henrique: 0, fernando: 0 },
    });

    setTitle('');
    setAuthor('');
    setCategory('');
    setImgURL('');
    setSuccessAdd(!successAdd);
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
        <Typography variant="h5">Adicione um novo livro</Typography>

        <Box className={classes.inputBox}>
          <TextField
            value={title}
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
            value={author}
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
            value={category}
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
            value={imgURL}
            name="imgURL"
            label="Imagem da Capa (URL)"
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
          {successAdd && <SuccessAdd open={successAdd} setOpen={setSuccessAdd} />}
        </Box>
      </Card>
    </Container>
  );
};

export default AddBook;
