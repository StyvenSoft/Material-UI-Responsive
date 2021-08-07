import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  logoLg: {
    display: 'none',
    [theme.breakpoints.up('sm')]:{
      display: 'block',
    }
  }, 
  logoSm: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    }
  },
}));

const Navbar = () => {

  const classes = useStyles();

  return (
    <AppBar>
        <Toolbar>
          <Typography variant="h6" className={classes.logoLg}>
            News Technology
          </Typography>
          <Typography variant="h6" className={classes.logoSm}>
            News
          </Typography>
        </Toolbar>
    </AppBar>  
  );
}

export default Navbar;