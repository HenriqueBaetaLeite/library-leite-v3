import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import DeleteBookAlert from './DeleteBookAlert';

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
  const history = useHistory();
  const [userRating, setUserRating] = useState(0);
  const [starValue, setStarValue] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const { title, author, category, imgSrc, rating, user, id } = props;

  useEffect(() => {
    userStarRating();
  }, []);

  const changeStarRating = (event) => {
    console.log('changeStar', event.target.value);
    setStarValue(event.target.value);
  };

  // console.log('my card', rating, user, userRating, id);

  const userStarRating = () => {
    if (user?.includes('henrique')) {
      return setUserRating(rating.henrique);
    } else {
      return setUserRating(rating.fernando);
    }
  };

  const handleDeleteButton = () => {
    console.log('meu id é:', id);
    setOpenDeleteDialog(!openDeleteDialog);
  };

  return (
    <Card className={classes.card}>
      <CardHeader title={title} subheader={author} />
      <img src={imgSrc} height="250px" />
      {/* <CardMedia style={{ height: '250px' }} image={imgSrc} /> */}
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
          onChange={changeStarRating}
        />
      </Box>
      <Divider variant="middle" />
      <CardActions className={classes.cardButtons}>
        <Button
          onClick={() => history.push('/books/edit')}
          size="small"
          variant="contained"
          color="primary"
        >
          Editar
        </Button>
        <IconButton onClick={handleDeleteButton} aria-label="delete" color="red">
          <Delete />
        </IconButton>
        {openDeleteDialog && (
          <DeleteBookAlert open={openDeleteDialog} setOpen={setOpenDeleteDialog} id={id} />
        )}
      </CardActions>
    </Card>
  );
};

export default MyCard;
