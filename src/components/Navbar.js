import { AppBar, makeStyles, Toolbar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({}));

const Navbar = () => {

  const classes = useStyles();

  return (
    <AppBar>
        <Toolbar></Toolbar>
    </AppBar>  
  );
}

export default Navbar;