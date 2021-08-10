import { Container, Typography } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        height: "100vh",
        color: "white",
        paddingTop: theme.spacing(10),
        backgroundColor: theme.palette.primary.main,
    },
    item: {
        display: "flex",
        alignItem: "center",
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(3),
            cursor: "pointer",
        },
    },
    text: {
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
}));

const Leftbar = () => {

    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <div className={classes.item}>
                <Home className={classes.icon} />
                <Typography className={classes.text}>Home Page</Typography>
            </div>
            <div className={classes.item}>
                <Home className={classes.icon} />
                <Typography className={classes.text}>Home Page</Typography>
            </div>
            <div className={classes.item}>
                <Home className={classes.icon} />
                <Typography className={classes.text}>Home Page</Typography>
            </div>
            <div className={classes.item}>
                <Home className={classes.icon} />
                <Typography className={classes.text}>Home Page</Typography>
            </div>
        </Container>
    );
}

export default Leftbar;