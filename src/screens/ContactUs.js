import React from 'react';
import Carausal from '../components/carausal/Carausal';
import MainLabel from '../components/mainLabel/MainLabel';
import SecondaryLabel from '../components/secondaryLabel/SecondaryLabel';
import NewsLetter from '../components/newsletter/NewsLetter';
import { Grid, Divider, makeStyles, Link, useTheme } from '@material-ui/core';
import SocialIcons from '../components/socialIcons/SocialIcons';
import { Phone, Email } from '@material-ui/icons';

const useStyles = makeStyles({
  homeLabel: {
    margin: '20px 0',
  },
  contactsContainer: {
    margin: '15px',
  },
  contactElement: {
    backgroundColor: (props) => props.elementColor,
    padding: '10px',
    margin: '5px',
    border: '1px solid',
    cursor: 'pointer',
    borderStyle: 'none',
    borderRadius: '5px',
  },
});

const Home = () => {
  const theme = useTheme();
  const elementColor = theme.palette.secondary.light;
  const classes = useStyles({ elementColor });

  return (
    <Grid container className={classes.homeLabel}>
      <Grid container item xs={12} md={6} justify="center" alignItems="center">
        <div className={classes.contactsContainer}>
          <div className={classes.contactElement}>
            <Phone />
            <Link color="inherit" variant="body2">
              +91-89675xxxx
            </Link>
          </div>
          <div className={classes.contactElement}>
            <Phone />
            <Link color="inherit" variant="body2">
              +91-89675xxxx
            </Link>
          </div>
          <div className={classes.contactElement}>
            <Email />
            <Link color="inherit" variant="body2">
              +91-89675xxxx
            </Link>
          </div>
        </div>
      </Grid>
      <Grid container item xs={12} md={1} justify="center">
        <Divider orientation="vertical" component="hr" variant="middle" />
      </Grid>
      <Grid container item xs={12} md={5} justify="flex-start">
        <SocialIcons />
      </Grid>
    </Grid>
  );
};

export default Home;
