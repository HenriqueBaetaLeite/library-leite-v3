import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
const Home = () => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push('/login');
    }, 4000);
  }, []);
  return (
    <div>
      <h3>Coletânia de Livros Baêta Leite</h3>
      <img src="" alt="logo BL" />
    </div>
  );
};

export default Home;
