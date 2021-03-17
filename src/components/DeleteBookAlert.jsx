import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContentText,
  Button,
  DialogContent,
} from '@material-ui/core';

import { db } from '../utils/firebase';

import SuccessDelete from './SuccessDelete';

const useStyles = makeStyles({
  deleteButton: {
    color: 'red',
    background: 'black',
    fontWeight: 600,
    margin: '5px',
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
    await db.collection('books').doc(id).delete();
    setOpenSuccessDelete(true);
    setTimeout(() => {
      setOpen(!open);
      // setOpenSuccessDelete(false);
    }, 3000);
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
      <DialogTitle id="alert-dialog-slide-title">Deletar livro?</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
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
    </Dialog>
  );
};

export default DeleteBookAlert;
