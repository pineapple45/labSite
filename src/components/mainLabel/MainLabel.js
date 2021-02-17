import React from 'react';
import { Paper, Typography, makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles({
  labelContainer: {
    width: '80%',
    padding: '10px',
  },
});

const MainLabel = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.labelContainer} variant="outlined" squared>
      <Typography variant="h4" gutterBottom>
        Dental Labs
      </Typography>
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        dapibus scelerisque eros, id tincidunt est ultrices nec. Cras facilisis
        sed nisl at lacinia. Phasellus gravida risus vel tincidunt condimentum.
        Cras sodales mollis tortor. Aenean tempus posuere nunc, eget rutrum
        magna molestie nec. Phasellus gravida risus vel tincidunt condimentum.
        Cras sodales mollis tortor. Aenean tempus posuere nunc, eget rutrum
        magna molestie nec. Phasellus gravida risus vel tincidunt condimentum.
        Cras sodales mollis tortor. Aenean tempus posuere nunc, eget rutrum
        magna molestie nec. Phasellus gravida risus vel tincidunt condimentum.
        Cras sodales mollis tortor. Aenean tempus posuere nunc, eget rutrum
        magna molestie nec.
      </Typography>
      <Button variant="outlined" color="secondary">
        Read More
      </Button>
    </Paper>
  );
};

export default MainLabel;
