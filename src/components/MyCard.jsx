import React, { useState, useEffect } from 'react';

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
    // background: 'lightBlue',
    backgroundImage: 'linear-gradient(49deg, white, gray)',
  },
  star: {
    textAlign: 'center',
    marginBottom: '10px',
  },
  cardButtons: {
    display: 'flex',
    justifyContent: 'space-around',
  },
});

const MyCard = (props) => {
  const classes = useStyles();
  const [userRating, setUserRating] = useState(0);

  const [starValue, setStarValue] = useState(null);
  const { title, author, category, imgSrc, rating, readBy, user } = props;

  useEffect(() => {
    userStarRating();
  }, []);

  console.log('my card', rating, readBy, user, userRating);

  const userStarRating = () => {
    if (user?.includes('henrique')) {
      return setUserRating(rating.henrique);
    } else {
      return setUserRating(rating.fernando);
    }
  };

  return (
    <Card className={classes.card}>
      <CardHeader title={title} subheader={author} />
      <CardMedia style={{ height: '250px' }} image={imgSrc} />
      <CardContent>
        <Typography variant="body1" component="p">
          {category}
        </Typography>
        {/* {readBy[0] === ""
          ? null : readBy.map((reader) => (
              <Typography variant="body1" component="p">
                Lido por: {reader}
              </Typography>
            ))
          } */}
      </CardContent>

      <Box className={classes.star}>
        <Rating
          precision={0.5}
          name="simple-controlled"
          value={userRating}
          onChange={(_event, newValue) => {
            console.log(newValue);
            setStarValue(newValue);
          }}
        />
      </Box>
      <Divider variant="middle" />
      <CardActions className={classes.cardButtons}>
        <Button size="small" variant="contained" color="primary">
          Editar
        </Button>
        <IconButton aria-label="delete" color="red">
          <Delete />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default MyCard;
