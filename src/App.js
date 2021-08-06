import logo from './logo.svg';
import './App.css';
import { Button, makeStyles } from '@material-ui/core';
import { Person } from '@material-ui/icons';

const useStyles = makeStyles({
  button: {
    color: "white",
    backgroundColor: "black"
  }
})

const App = () => {

  const classes = useStyles();

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
