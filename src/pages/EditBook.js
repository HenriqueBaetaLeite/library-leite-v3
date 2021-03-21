import React, { useState } from 'react';
import { Container, Typography, TextField, Card, Button, Box } from '@material-ui/core';

import TheHeader from '../components/TheHeader';
import SuccessEdited from '../components/SuccessEdited';

import { makeStyles } from '@material-ui/core/styles';

import { editBook } from '../utils/firebase';

const useStyles = makeStyles({
  card: {
    padding: '15px',
    marginTop: '80px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#f6f6f6',
  },
  inputBox: {
    marginTop: '20px',
    marginBottom: '30px',
  },
  inputLabel: {
    textAlign: 'left',
  },
  button: {
    marginTop: '40px',
  },
});

const EditBook = (props) => {
  const classes = useStyles();

  const { titleCard, authorCard, categoryCard, imgSrcCard, idCard } = props.location.state;

  const [title, setTitle] = useState(titleCard);
  const [author, setAuthor] = useState(authorCard);
  const [category, setCategory] = useState(categoryCard);
  const [imgURL, setImgURL] = useState(imgSrcCard);
  const [successEdited, setSuccessEdited] = useState(false);

  const handleSubmit = async (event) => {
    await editBook(idCard, {
      title,
      author,
      category,
      imgURL,
    });
    setSuccessEdited(true);
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
            Editar
          </Button>
        </Box>
        {successEdited && <SuccessEdited open={successEdited} setOpen={setSuccessEdited} />}
      </Card>
    </Container>
  );
};

export default EditBook;
