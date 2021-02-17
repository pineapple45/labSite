import React from 'react';
import {
  Paper,
  Typography,
  Button,
  FormControl,
  OutlinedInput,
  makeStyles,
  useTheme,
  Grid,
} from '@material-ui/core';

const useStyles = makeStyles({
  newsletter: {
    // padding: '30px',
    width: '80%',
    marginTop: '40px',
    // color: '#fff',
  },
  newsletterDescription: {
    padding: '30px 50px',
    backgroundColor: (props) => props.newsLetterBgColor,
    color: '#fff',
  },
  newsletterForm: {
    padding: '30px 50px',
  },
});

const NewsLetter = () => {
  const theme = useTheme();
  const newsLetterBgColor = theme.palette.primary.light;
  const classes = useStyles({ newsLetterBgColor });

  return (
    <Grid container item xs={12} md={12} justify="center">
      <Paper
        className={classes.newsletter}
        //   style={{ backgroundColor: newsLetterBgColor }}
        variant="outlined"
        squared
      >
        <Grid container className={classes.homeLabel}>
          <Grid
            className={classes.newsletterDescription}
            container
            item
            xs={12}
            md={6}
            justify="flex-start"
          >
            <Typography variant="h4" gutterBottom>
              Subscribe to our newsletter
            </Typography>
            <Typography paragraph>
              Signup for our weekly newletter to get the latest news, updates
              and amazing offers delivered directly to your inbox.
            </Typography>
          </Grid>
          <Grid
            className={classes.newsletterForm}
            container
            item
            xs={12}
            md={6}
            justify="flex-start"
          >
            <Grid container className={classes.homeLabel}>
              <Grid
                container
                item
                xs={12}
                md={8}
                justify="center"
                alignItems="center"
              >
                <FormControl
                  //   className={clsx(classes.margin, classes.textField)}
                  variant="outlined"
                  size="small"
                  margin="normal"
                  fullWidth
                >
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    //   value={values.weight}
                    // endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      'aria-label': 'weight',
                    }}
                    labelWidth={0}
                  />
                </FormControl>{' '}
              </Grid>
              <Grid
                container
                item
                xs={12}
                md={4}
                justify="center"
                alignItems="center"
              >
                <div>
                  <Button variant="outlined" color="secondary" size="large">
                    SUBSCRIBE
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default NewsLetter;
