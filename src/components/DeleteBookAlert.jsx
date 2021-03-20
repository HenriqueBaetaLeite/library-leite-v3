import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContentText,
  Button,
  DialogContent,
  Typography,
  Box,
} from '@material-ui/core';

import { db } from '../utils/firebase';

import SuccessDelete from './SuccessDelete';

const useStyles = makeStyles({
  content: {
    background: '#cecece',
  },
  deleteButton: {
    color: 'red',
    background: 'black',
    fontWeight: 600,
    margin: '5px',
  },
  title: {
    fontWeight: 800,
  },
});

const DeleteBookAlert = (props) => {
  const { open, setOpen, id } = props;
  const [openSuccessDelete, setOpenSuccessDelete] = useState(false);

  const classes = useStyles();

  const handleClose = () => {
    setOpen(!open);
  };

  const handleDelete = async () => {
    setOpenSuccessDelete(true);
    setTimeout(() => {
      setOpen(!open);
      setOpenSuccessDelete(false);
      db.collection('books').doc(id).delete();
    }, 3500);
  };
  return (
    <Dialog
      open={open}
      // TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <Box className={classes.content}>
        <DialogTitle id="alert-dialog-slide-title">
          <Typography variant="h5" className={classes.title}>
            Deletar livro?
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText color="textPrimary" id="alert-dialog-slide-description">
            Depois de realizar a exclusão do livro não será possível reverter esta ação.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button variant="contained" onClick={handleDelete} className={classes.deleteButton}>
            Deletar
          </Button>
          {openSuccessDelete && (
            <SuccessDelete open={openSuccessDelete} setOpen={setOpenSuccessDelete} />
          )}
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default DeleteBookAlert;
