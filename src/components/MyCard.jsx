import React, { useState } from 'react';

import { Rating } from '@material-ui/lab';

import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  IconButton,
  Divider,
  Box,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';

import Delete from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  title: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
  },
  avatar: {
    backgroundColor: 'red',
  },
  card: {
    backgroundImage: 'linear-gradient(37deg, #dd4, #fa45)',
  },
  star: {
    textAlign: 'center',
  },
  cardButtons: {
    display: 'flex',
    justifyContent: 'space-around',
  },
});

const MyCard = (props) => {
  const classes = useStyles();

  const [starValue, setStartValue] = useState(null);

  const { title, author, category, imgSrc } = props;

  return (
    <Card className={classes.card}>
      <CardHeader title={title} subheader={author} />
      <CardMedia style={{ height: '250px' }} image={imgSrc} />
      <CardContent>
        <Typography variant="body1" component="p">
          {category}
        </Typography>
      </CardContent>
      <Divider variant="middle" />
      <Box className={classes.star}>
        <Rating
          name="simple-controlled"
          value={starValue}
          onChange={(_event, newValue) => {
            setStartValue(newValue);
          }}
        />
      </Box>
      <Divider variant="middle" />
      <CardActions className={classes.cardButtons}>
        <Button size="small" variant="contained" color="primary">
          Editar
        </Button>
        <IconButton aria-label="delete" color="secondary">
          <Delete />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default MyCard;
