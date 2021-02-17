import React from 'react';
import Carausal from '../components/carausal/Carausal';
import MainLabel from '../components/mainLabel/MainLabel';
import SecondaryLabel from '../components/secondaryLabel/SecondaryLabel';
import NewsLetter from '../components/newsletter/NewsLetter';
import { Grid, Divider, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  homeLabel: {
    margin: '20px 0',
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.homeLabel}>
      <Grid container item xs={12} md={5} justify="flex-end">
        <Carausal />
      </Grid>
      <Grid container item xs={12} md={1} justify="center">
        <Divider orientation="vertical" component="hr" variant="middle" />
      </Grid>
      <Grid container item xs={12} md={6} justify="flex-start">
        <MainLabel />
      </Grid>
      <Grid container item xs={12} md={12} justify="center">
        <SecondaryLabel />
      </Grid>
    </Grid>
  );
};

export default Home;
