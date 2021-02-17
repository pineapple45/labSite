import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, green } from '@material-ui/core/colors';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Instagram, Twitter, Facebook, LinkedIn } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  square: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    padding: '30px',
    cursor: 'pointer',
  },
  rounded: {
    color: '#fff',
    backgroundColor: green[500],
  },
  social: {
    fontSize: '50px',
  },
}));

const SocialIcons = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <Grid container item md={6} justify="flex-end" alignItems="flex-end">
        <Avatar variant="square" className={classes.square}>
          <Instagram className={classes.social} />
        </Avatar>
      </Grid>
      <Grid container item md={6} justify="flex-start" alignItems="flex-end">
        <Avatar variant="square" className={classes.square}>
          <Twitter className={classes.social} />
        </Avatar>
      </Grid>
      <Grid container item md={6} justify="flex-end" alignItems="flex-start">
        <Avatar variant="square" className={classes.square}>
          <Facebook className={classes.social} />
        </Avatar>
      </Grid>
      <Grid container item md={6} justify="flex-start" alignItems="flex-start">
        <Avatar variant="square" className={classes.square}>
          <LinkedIn className={classes.social} />
        </Avatar>
      </Grid>
    </Grid>
  );
};

export default SocialIcons;
