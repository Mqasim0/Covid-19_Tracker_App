import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import image1 from '../images/01.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function Demo() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={4}>
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component='h5' variant='h5'>
                Live From Space
              </Typography>
              <Typography variant='subtitle1' color='textSecondary'>
                Mac Miller
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <IconButton aria-label='previous'>
                {theme.direction === 'rtl' ? (
                  <SkipNextIcon />
                ) : (
                  <SkipPreviousIcon />
                )}
              </IconButton>
              <IconButton aria-label='play/pause'>
                <PlayArrowIcon className={classes.playIcon} />
              </IconButton>
              <IconButton aria-label='next'>
                {theme.direction === 'rtl' ? (
                  <SkipPreviousIcon />
                ) : (
                  <SkipNextIcon />
                )}
              </IconButton>
            </div>
          </div>
          <CardMedia
            className={classes.cover}
            image={image1}
            title='Live from space album cover'
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component='h5' variant='h5'>
                Live From Space
              </Typography>
              <Typography variant='subtitle1' color='textSecondary'>
                Mac Miller
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <IconButton aria-label='previous'>
                {theme.direction === 'rtl' ? (
                  <SkipNextIcon />
                ) : (
                  <SkipPreviousIcon />
                )}
              </IconButton>
              <IconButton aria-label='play/pause'>
                <PlayArrowIcon className={classes.playIcon} />
              </IconButton>
              <IconButton aria-label='next'>
                {theme.direction === 'rtl' ? (
                  <SkipPreviousIcon />
                ) : (
                  <SkipNextIcon />
                )}
              </IconButton>
            </div>
          </div>
          <CardMedia
            className={classes.cover}
            image={image1}
            title='Live from space album cover'
          />
        </Card>
      </Grid>
    </Grid>
  );
}
