import { alpha, AppBar, Badge, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { Mail, Notifications, Search } from '@material-ui/icons';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: 'space-between'
  },
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
  search: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  searchButton: {
    marginRight: theme.spacing(2),
  },
  icons: {
    display: "flex",
    alingItems: "center",
  },
  badge: {
    marginRight: theme.spacing(2),
  },
}));

const Navbar = () => {

  const classes = useStyles();

  return (
    <AppBar>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.logoLg}>
            News Technology
          </Typography>
          <Typography variant="h6" className={classes.logoSm}>
            News
          </Typography>
          <div className={classes.search}>
            <Search />
            <InputBase className={classes.input} placeholder="Search..." />
          </div>
          <div className={classes.icons}>
            <Search className={classes.searchButton} />
            <Badge className={classes.badge} badgeContent={4} color="secondary">
              <Mail />
            </Badge>
            <Badge className={classes.badge} badgeContent={4} color="secondary">
              <Notifications />
            </Badge>
          </div>
        </Toolbar>
    </AppBar>  
  );
}

export default Navbar;