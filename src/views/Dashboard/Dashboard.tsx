import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import bg from './assets/background.jpg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      height: '100vh',
      marginTop: theme.spacing(2)
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor: 'rgba(29, 52, 76, 0.3)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    heading: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.primary,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      fontWeight: 'bold',
      marginBottom: theme.spacing(2)
    },
    transparentBox: {
      backgroundColor: 'rgba(29, 52, 76, 0.7)',
      padding: theme.spacing(2),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%'
    },
    table: {
      width: '70%'
    }
  })
);


const Dashboard: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="subtitle1">
              Bomb Finance Summary
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="subtitle1">
              Invest now
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="subtitle1">
              Latest News
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="subtitle1">
              Bomb Farms
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="subtitle1">
              Bonds
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;