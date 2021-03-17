import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Copyright from '../components/Copyright';

import { motion } from 'framer-motion';

import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Collapse,
  CircularProgress,
} from '@material-ui/core';

import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import validateEmail from '../utils/validateEmail';

import { auth } from '../utils/firebase';

import LoginAlert from '../components/LoginAlert';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#8ACB88',
      main: '#3A86FF',
      dark: '#48B8D0',
    },
    secondary: {
      light: '#3A86FF',
      main: '#faa613',
      dark: '#EDFF71',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  container: {
    background: 'white',
    marginTop: '40px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  footer: {
    marginTop: '80px',
    marginBottom: '20px',
  },
  inputs: {
    background: 'white',
  },
  submit: {
    marginTop: theme.spacing(2),
  },
  title: {
    marginTop: 20,
  },
  typo: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(2),
  },
}));

const Login = () => {
  const history = useHistory();
  const classes = useStyles();
  const [email, setEmail] = useState();
  const [wrongEmailInput, setWrongEmailInput] = useState(false);
  const [password, setPassword] = useState();
  const [wrongPasswordInput, setWrongPasswordInput] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);
  const [loginErrorMsg, setLoginErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !validateEmail(email)) {
      return setWrongEmailInput(true);
    }

    if (!password || password.length < 6) {
      return setWrongPasswordInput(true);
    }

    try {
      setIsLoading(true);
      const emailExists = await auth.signInWithEmailAndPassword(email, password);
      localStorage.setItem('userLoggedInBooks', emailExists.user.email);
      setTimeout(() => {
        history.push('/books');
      }, 1800);
    } catch (err) {
      setErrorLogin(true);
      setLoginErrorMsg(err.message);
      setIsLoading(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setWrongEmailInput(false);
    setWrongPasswordInput(false);
    setErrorLogin(false);

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      default:
        setPassword(value);
        break;
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 5 }}>
        <Container className={classes.container} maxWidth="xs">
          <Box className={classes.title}>
            <Typography className={classes.typo} variant="h5">
              Login
            </Typography>
          </Box>
          {isLoading && (
            <div className="text-center m-2">
              <CircularProgress />
            </div>
          )}
          {errorLogin && (
            <Collapse in={errorLogin}>
              <LoginAlert msgError={loginErrorMsg} closeAlert={setErrorLogin} />
            </Collapse>
          )}
          <Box className={classes.login}>
            <form onSubmit={handleSubmit}>
              <TextField
                autoComplete="off"
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                type="email"
                autoFocus
                onChange={handleChange}
                error={wrongEmailInput}
                helperText={wrongEmailInput && 'o e-mail está no formato inválido'}
              />

              <TextField
                autoComplete="off"
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                onChange={handleChange}
                color="primary"
                error={wrongPasswordInput}
                helperText={wrongPasswordInput && 'a senha deve ser maior do que 6 caracteres'}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Entrar
              </Button>
            </form>
          </Box>
          <Box className={classes.footer}>
            <Copyright />
          </Box>
        </Container>
      </motion.div>
    </ThemeProvider>
  );
};

export default Login;
