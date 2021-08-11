import logo from './logo.svg';
import './App.css';
import { Button, Grid, makeStyles } from '@material-ui/core';
import { Person } from '@material-ui/icons';
import Navbar from './components/Navbar';
import Leftbar from './components/Leftbar';
import Feed from './components/Feed';
import Add from './components/Add';

const useStyles = makeStyles((theme) => ({
  button: {
    ...theme.myButton
  },
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const App = () => {

  const classes = useStyles();

  return (
    <div className="App">
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Person />}
              className={classes.button}
            >
              Primary
            </Button>
          </header>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}></Grid>
      </Grid>
      <Add />
    </div>
  );
}

export default App;
