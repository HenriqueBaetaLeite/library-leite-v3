import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  List,
  Container,
  Divider,
} from '@material-ui/core';

import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import InfoIcon from '@material-ui/icons/Info';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  menu: {
    marginTop: theme.spacing(4),
  },
  typography: {
    margin: theme.spacing(2),
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  test: {
    background: '#',
  },
}));

const MyMenu = (props) => {
  const { open, handleMenu, history } = props;
  const classes = useStyles();

  const listItems = [
    { text: 'Meus livros', icon: <MenuBookIcon />, onClick: () => history.push('/books') },
    {
      text: 'Adicionar livro',
      icon: <CollectionsBookmarkIcon />,
      onClick: () => history.push('/books/add'),
    },
    { text: 'Sobre', icon: <InfoIcon />, onClick: () => history.push('/sobre') },
  ];
  return (
    <Drawer anchor="left" variant="persistent" open={open} onClick={() => handleMenu()}>
      <Container className={classes.container}>
        <LocalLibraryIcon style={{ cursor: 'pointer' }} onClick={() => history.push('/home')} />
        <Typography className={classes.typography} variant="subtitle1">
          Coletânia BL
        </Typography>
      </Container>
      <Divider />
      <List className={classes.test}>
        {listItems.map((item) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
      {/* <MenuItem className={classes.menu} onClick={() => handleMenu()}>
        Minhas receitas
      </MenuItem>
      <MenuItem onClick={() => handleMenu()}>Minhas despesas</MenuItem> */}
    </Drawer>
  );
};

export default withRouter(MyMenu);
