import { Container, Typography } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        height: "100vh",
        color: "white",
    },
    item: {
        display: "flex",
        alignItem: "center",
        marginBotton: theme.spacing(4),
        [theme.breackpoints.up("sm")]: {
            marginBotton: theme.spacing(3),
            cursor: "pointer",
        },
    },
    text: {
        [theme.breackpoints.down("sm")]: {
            display: "none",
        },
    },
}));

const Leftbar = () => {

    const classes = useStyles();

    return (
        <Container>
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