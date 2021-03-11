import React from 'react';

import { Link, Typography } from '@material-ui/core';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link
        color="inherit"
        href="https://www.linkedin.com/in/henriquebaetaleite"
        target="_blank"
        rel="noopener noreferrer"
      >
        Henrique Baêta Leite
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
};

export default Copyright;
