import React from 'react';
import { Container, Typography, Card } from '@material-ui/core';
import TheHeader from '../components/TheHeader';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    padding: '15px',
    marginTop: '100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '300px',
  },
  typo: {
    margin: '15px',
  },
  inputBox: {
    marginTop: '20px',
    marginBottom: '30px',
  },
  link: {
    textDecoration: 'none',
  },
});

const About = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <TheHeader />

      <Card className={classes.card}>
        <Typography className={classes.typo} variant="h5">
          Esta página foi criada por{' '}
          <a
            className={classes.link}
            href="https://henriquebaetaleite.github.io/"
            target="_blank"
            rel="noreferrer"
          >
            Henrique Baêta Leite
          </a>
          .
        </Typography>
        <Typography className={classes.typo} variant="h5">
          Utilizando as seguintes tecnologias:
        </Typography>
        <Typography className={classes.typo} variant="h6">
          React, Firebase, Framer-Motion, React Router Dom.
        </Typography>
        <Typography className={classes.typo} variant="h6">
          Obrigado pela visita!
        </Typography>
      </Card>
    </Container>
  );
};

export default About;
