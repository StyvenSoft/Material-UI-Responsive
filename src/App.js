import logo from './logo.svg';
import './App.css';
import { Button, makeStyles } from '@material-ui/core';
import { Person } from '@material-ui/icons';
import Navbar from './components/Navbar';

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
