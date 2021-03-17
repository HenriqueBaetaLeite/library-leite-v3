import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
// import CloseIcon from '@material-ui/icons/Close';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MyMenu from '../components/MyMenu';

import { makeStyles } from '@material-ui/styles';
import { auth } from '../utils/firebase';

const useStyles = makeStyles((theme) => ({
  toolBarStyles: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const TheHeader = () => {
  const history = useHistory();
  const classes = useStyles();
  const [openMenu, setOpenMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const openLogoutMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeLogoutMenu = () => {
    setAnchorEl(null);
  };

  const logout = async () => {
    localStorage.removeItem('userLoggedInBooks');
    setAnchorEl(null);
    await auth.signOut();
    history.push('/login');
  };

  return (
    <AppBar>
      <Toolbar className={classes.toolBarStyles}>
        <IconButton onClick={handleMenu}>
          <MenuIcon color="info" />
        </IconButton>
        <Typography variant="subtitle1">Coletânia de Livros Baêta Leite</Typography>
        <IconButton onClick={openLogoutMenu}>
          <ExitToAppIcon color="info" />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={closeLogoutMenu}
        >
          <MenuItem onClick={closeLogoutMenu}>Cancelar</MenuItem>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>
      </Toolbar>

      <MyMenu open={openMenu} handleMenu={handleMenu} />
    </AppBar>
  );
};

export default TheHeader;
