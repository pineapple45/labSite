import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container spacing={1}>
          <Grid container item xs={10} md={4} spacing={3} justify="flex-start">
            <MenuItem>LOGO</MenuItem>
          </Grid>
          <Grid container item xs={2} md={8} spacing={3} justify="flex-end">
            <MenuItem onClick={() => history.push('/')}>Home</MenuItem>
            <MenuItem onClick={() => history.push('/about-us')}>
              About us
            </MenuItem>
            <MenuItem onClick={() => history.push('/services')}>
              Services
            </MenuItem>
            <MenuItem onClick={() => history.push('/contact-us')}>
              Contact us
            </MenuItem>
          </Grid>
        </Grid>
      </Toolbar>
      {/* <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Logo
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar> */}
    </AppBar>
  );
};

export default Header;
