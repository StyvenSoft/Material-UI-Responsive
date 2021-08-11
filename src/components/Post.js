import { 
    Button,
        Card, 
        CardActionArea, 
        CardActions, 
        CardContent, 
        CardMedia, 
        makeStyles, 
        Typography 
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    card: {
        marginBottom: theme.spacing(5),
    },
    media: {
        height: 250,
    },
}));

const Post = () => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia 
                    className={classes.media}
                    image="https://images.pexels.com/photos/1292862/pexels-photo-1292862.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    title="Tasty tea"
                />
            </CardActionArea>
            <CardContent>
                <Typography variant="h5">My first Post</Typography>
                <Typography variant="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quia corporis nemo esse hic debitis commodi enim! Quibusdam architecto eum, nam nemo laboriosam excepturi doloribus quisquam veritatis sint, pariatur sunt.</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">Shared</Button>
                <Button size="small" color="primary">Learn more</Button>
            </CardActions>
        </Card>
    );
};

export default Post;