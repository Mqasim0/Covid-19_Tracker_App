import React, { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CountUp from 'react-countup';
import image1 from '../images/01.png';
import image2 from '../images/02.png';
import image3 from '../images/03.png';

import { CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 20,
  },
  paper: {
    padding: theme.spacing(2),

    // textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Cards({
  data: { confirmed, recovered, deaths, lastUpdate },
}) {
  const classes = useStyles();

  if (!confirmed) {
    return 'loadding...';
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper
            elevation={3}
            className={classes.paper}
            style={{
              borderRight: '5px solid red',
              borderLeft: '5px solid red',
            }}
          >
            <CardContent>
              <img src={image1} style={{ height: '100px' }} />
              <h1 style={{ color: 'black' }}>Total Cases</h1>

              <Typography variant='h5' component='h2'>
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={2.75}
                  separator=','
                  style={{ color: 'red' }}
                />
              </Typography>
              <Typography
                style={{
                  color: 'black',
                  paddingTop: '10px',
                  fontSize: '12px',
                }}
              >
                {new Date(lastUpdate).toDateString()}
              </Typography>
            </CardContent>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper
            elevation={3}
            className={classes.paper}
            style={{
              borderRight: '5px solid lightGreen',
              borderLeft: '5px solid lightGreen',
            }}
          >
            <CardContent>
              <img src={image2} style={{ height: '100px' }} />
              <h1 style={{ color: 'black' }}>Total Recovered</h1>

              <Typography variant='h5' component='h2'>
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={2.75}
                  separator=','
                  style={{ color: 'green' }}
                />
              </Typography>
              <Typography
                style={{
                  color: 'black',
                  paddingTop: '10px',
                  fontSize: '12px',
                }}
              >
                {new Date(lastUpdate).toDateString()}
              </Typography>
            </CardContent>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper
            elevation={3}
            className={classes.paper}
            style={{
              borderRight: '5px solid black',
              borderLeft: '5px solid black',
            }}
          >
            <CardContent>
              <img src={image3} style={{ height: '100px' }} />
              <h1 style={{ color: 'black' }}>Total Deaths</h1>

              <Typography variant='h5' component='h2'>
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={2.75}
                  separator=','
                  style={{ color: 'black' }}
                />
              </Typography>
              <Typography
                style={{
                  color: 'black',
                  paddingTop: '10px',
                  fontSize: '12px',
                }}
              >
                {new Date(lastUpdate).toDateString()}
              </Typography>
            </CardContent>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
