import { 
    alpha, 
    AppBar, 
    Avatar, 
    Badge, 
    makeStyles, 
    Toolbar, 
    Typography, 
    withStyles 
} from '@material-ui/core';
import { Cancel, Mail, Notifications, Search } from '@material-ui/icons';
import InputBase from '@material-ui/core/InputBase';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: 'space-between'
  },
  logoLg: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
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
      display: (props) => (props.open ? 'flex' : 'none'),
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  cancel: {
    [theme.breakpoints.up('sm')]: {
      display: "none",
    },
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  icons: {
    display: (props) => (props.open ? 'none' : 'flex'),
    alingItems: "center",
  },
  badge: {
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(1),
  },
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });

  return (
    <AppBar position="fixed">
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
          <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
        </div>
        <div className={classes.icons}>
          <Search
            className={classes.searchButton}
            onClick={() => setOpen(true)}
          />
          <Badge className={classes.badge} badgeContent={4} color="secondary">
            <Mail />
          </Badge>
          <Badge className={classes.badge} badgeContent={4} color="secondary">
            <Notifications />
          </Badge>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            variant="dot"
          >
            <Avatar alt="Steveen Echeverry" src="https://avatars.githubusercontent.com/u/10743862" />
          </StyledBadge>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;