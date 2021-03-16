import React from 'react';
import { Container, Typography, Card } from '@material-ui/core';
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
});

const About = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xs">
      <TheHeader />

      <Card className={classes.card}>
        <Typography variant="h5">Esta página foi criada utilizando as seguintes tecnologias:</Typography>
        <Typography>React, Firebase, Framer-Motion, React Router Dom</Typography>
      </Card>
    </Container>
  );
};

export default About;
