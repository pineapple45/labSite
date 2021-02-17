import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {
  Paper,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  carausal: {
    width: '80%',
  },
  mediaContainer: {
    textAlign: 'center',
  },
  media: {
    height: 350,
    width: 'auto',
    objectFit: 'contain',
  },
});

function Carausal(props) {
  var images = [
    {
      src: 'https://cutt.ly/wk2ayaH',
    },
    {
      src:
        'https://thumbs.dreamstime.com/b/beautiful-white-teeth-braces-dental-care-photo-woman-smile-ortodontic-accessories-orthodontics-treatment-macro-shot-87506647.jpg',
    },
    {
      src:
        'https://www.dentistnorthraleigh.com/wp-content/uploads/2018/02/11.jpg',
    },
  ];

  const classes = useStyles();

  return (
    <Carousel
      className={classes.carausal}
      animation="fade"
      timeout="500"
      stopAutoPlayOnHover="true"
      swipe="true"
      navButtonsAlwaysInvisible="true"
    >
      {images.map((image, i) => (
        <Item key={i} item={image} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.mediaContainer} elevation={0}>
      <img className={classes.media} src={props.item.src} />
    </Paper>
  );
}

export default Carausal;
