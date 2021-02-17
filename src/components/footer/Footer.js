import React from 'react';
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  useTheme,
  Grid,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  footer: {
    padding: '30px 0',
  },
});

const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.footer}>
      <Grid container spacing={1} alignContent="center">
        <Grid
          container
          item
          xs={12}
          md={12}
          spacing={3}
          justify="center"
          alignItems="center"
        >
          <Typography variant="body1" color="inherit">
            © 2021 BrandName
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
