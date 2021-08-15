import {
    Avatar,
    Container,
    ImageList,
    ImageListItem,
    Link,
    makeStyles,
    Typography
} from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
    },
    title: {
        fontSize: 16,
        fontWeight: 500,
        color: "#555",
        marginBottom: theme.spacing(2)
    },
    link: {
        marginRight: theme.spacing(2),
        color: "#555",
        fontSize: 16,
    },
}));

const Rightbar = () => {
    const classes = useStyles();
    return <Container className={classes.container}>
        <Typography className={classes.title}>Online Friends</Typography>
        <AvatarGroup style={{ marginBottom: 20 }} max={6}>
            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
            <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
            <Avatar alt="Rian Rell" src="https://material-ui.com/static/images/avatar/6.jpg" />
            <Avatar alt="Tylor Fly" src="https://material-ui.com/static/images/avatar/7.jpg" />
        </AvatarGroup>
        <Typography className={classes.title}>Gallery</Typography>
        <ImageList rowHeight={100} cols={2} style={{ marginBottom: 20 }}>
            <ImageListItem>
                <img src="https://images.unsplash.com/photo-1492551557933-34265f7af79e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Imagen" />
            </ImageListItem>
            <ImageListItem>
                <img src="https://images.unsplash.com/photo-1474929743204-8f756140cb14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Imagen" />
            </ImageListItem>
            <ImageListItem>
                <img src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Imagen" />
            </ImageListItem>
            <ImageListItem>
                <img src="https://images.unsplash.com/photo-1615914143778-1a1a6e50c5dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="Imagen" />
            </ImageListItem>
            <ImageListItem>
                <img src="https://images.unsplash.com/photo-1604845152150-79d128ac8817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="Imagen" />
            </ImageListItem>
            <ImageListItem>
                <img src="https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="Imagen" />
            </ImageListItem>
        </ImageList>
        <Typography className={classes.title}>Categories</Typography>
        <Link href="#" className={classes.link} varient="body2">Sport</Link>
        <Link href="#" className={classes.link} varient="body2">Food</Link>
        <Link href="#" className={classes.link} varient="body2">Movies</Link>
        <Link href="#" className={classes.link} varient="body2">Science</Link>
    </Container>;
};

export default Rightbar;