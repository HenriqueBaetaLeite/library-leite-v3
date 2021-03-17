import React from 'react';

import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SuccessDelete = (props) => {
  const { open, setOpen } = props;

  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Livro deletado com sucesso!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SuccessDelete;
