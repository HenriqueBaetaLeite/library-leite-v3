import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import BooksBL from '../context';

import { getAllBooks, auth } from '../utils/firebase';
import { Button, Typography } from '@material-ui/core';

import { motion } from 'framer-motion';

const Transition = () => {
  const history = useHistory();
  const { getMyBooks } = useContext(BooksBL);

  useEffect(() => {
    getAllBooks().then((resp) => getMyBooks(resp));
    auth.onAuthStateChanged((user) => {
      if (!user) return history.push('/login');
    });
  }, []);

  const handleBooks = () => {
    history.push('/books');
  };

  return (
    <div style={{ marginTop: 80 }}>
      <Typography variant="h5">Boas vindas à Coletânia de Livros</Typography>
      <Typography variant="h5">Baêta Leite</Typography>

      <motion.div
        style={{ marginTop: 60 }}
        initial={{ y: -900, opacity: 0 }}
        animate={{ opacity: 1, y: [0, -100, 0] }}
        transition={{ duration: 3 }}
      >
        <Button
          style={{ fontWeight: 600 }}
          color="primary"
          variant="contained"
          onClick={handleBooks}
        >
          Acessar todos os livros
        </Button>
      </motion.div>
    </div>
  );
};

export default Transition;
