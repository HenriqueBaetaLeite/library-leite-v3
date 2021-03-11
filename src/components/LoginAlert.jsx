import React from 'react';

import { Alert, AlertTitle } from '@material-ui/lab';

const LoginAlert = ({ msgError, closeAlert }) => {
  return (
    <Alert severity="error" onClose={() => closeAlert(false)}>
      <AlertTitle>Warning</AlertTitle>
      {msgError}
    </Alert>
  );
};

export default LoginAlert;
