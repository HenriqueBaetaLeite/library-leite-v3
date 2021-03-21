import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import DeleteBookAlert from './DeleteBookAlert';

import { Rating } from '@material-ui/lab';

import { db } from '../utils/firebase';

import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
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
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const { title, author, category, imgSrc, rating, user, id } = props;

  useEffect(() => {
    userStarRating();
  }, []);

  const changeStarRating = async (event) => {
    const { value, name } = event.target;
    console.log('changeStar', value, name, currentUser);
    if (currentUser === 'fernando') {
      await db
        .collection('books')
        .doc(id)
        .update({ 'rating.fernando': Number(value) });
    } else {
      await db
        .collection('books')
        .doc(id)
        .update({ 'rating.henrique': Number(value) });
    }
  };

  const userStarRating = () => {
    if (user?.includes('henrique')) {
      setCurrentUser('henrique');
      return setUserRating(rating.henrique);
    } else {
      setCurrentUser('fernando');
      return setUserRating(rating.fernando);
    }
  };

  const handleDeleteButton = () => setOpenDeleteDialog(!openDeleteDialog);

  return (
    <Card className={classes.card}>
      <CardHeader title={title} subheader={author} />
      <img src={imgSrc} height="250px" alt={`Livro ${title}`} />
      {/* <CardMedia style={{ height: '250px' }} image={imgSrc} /> */}
      <CardContent>
        <Typography variant="body1" component="p">
          {category}
        </Typography>
      </CardContent>

      <Box className={classes.star}>
        <Rating precision={0.5} name={id} value={userRating} onChange={changeStarRating} />
      </Box>
      <Divider variant="middle" />
      <CardActions className={classes.cardButtons}>
        <Button
          onClick={() =>
            history.push({
              pathname: `/books/${id}`,
              state: {
                idCard: id,
                titleCard: title,
                authorCard: author,
                categoryCard: category,
                imgSrcCard: imgSrc,
              },
            })
          }
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
