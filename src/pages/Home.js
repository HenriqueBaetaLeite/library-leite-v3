import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import bookLogo from '../assets/book-icon.png';
import { motion } from 'framer-motion';

const Home = () => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push('/login');
    }, 4000);
  }, []);
  return (
    <motion.div animate={{ opacity: 1 }} transition={{duration: 2}} style={{marginTop: '80px', opacity: 0}}>
      <h3>Coletânia de Livros Baêta Leite</h3>
      <img height="220px" src={bookLogo} alt="logo BL" />
    </motion.div>
  );
};

export default Home;
