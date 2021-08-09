import logo from './logo.svg';
import './App.css';
import { Button, Grid, makeStyles } from '@material-ui/core';
import { Person } from '@material-ui/icons';
import Navbar from './components/Navbar';
import Leftbar from './components/Leftbar';

const useStyles = makeStyles((theme) => ({
  button: {
    ...theme.myButton
  },
}));

const App = () => {

  const classes = useStyles();

  return (
    <div className="App">
      <Navbar />
      <Grid container>
        <Grid item sm={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7}>
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
        </Grid>
        <Grid item sm={3}></Grid>
      </Grid>
    </div>
  );
}

export default App;
