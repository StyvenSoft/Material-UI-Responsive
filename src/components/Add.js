import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Button, Container, Fab, FormLabel, makeStyles, MenuItem, Modal, TextField, Tooltip } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    fab: {
        position: "fixed",
        bottom: 20,
        right: 20,
    },
    container: {
        width: 500,
        height: 550,
        backgroundColor: "white",
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        margin: "auto",
    },
    form: {
        padding: theme.spacing(2),
    },
    item: {
        marginBottom: theme.spacing(3),
    },
}));

const Add = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenAlert(false);
    };

    return (
        <>
            <Tooltip title="Add" area-label="add" onClick={() => setOpen(true)}>
                <Fab color="primary" className={classes.fab}>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Modal open={open}>
                <Container className={classes.container}>
                    <form className={classes.form} autoComplete="off">
                        <div className={classes.item}>
                            <TextField
                                id="standard-basic"
                                label="title"
                                size="small"
                                style={{ width: "100%" }}
                            />
                        </div>
                        <div className={classes.item}>
                            <TextField
                                id="outlined-multiline-static"
                                multiline
                                rows={4}
                                variant="outlined"
                                label="Description"
                                size="small"
                                style={{ width: "100%" }}
                            />
                        </div>
                        <div className={classes.item}>
                            <TextField select label="visibility" value="Public" style={{ width: "100%" }}>
                                <MenuItem value="Public">Public</MenuItem>
                                <MenuItem value="Private">Private</MenuItem>
                                <MenuItem value="Unlisted">Unlisted</MenuItem>
                            </TextField>
                        </div>
                        <div className={classes.item}>
                            <FormLabel component="legend">Whe can comment?</FormLabel>
                            <RadioGroup>
                                <FormControlLabel value="Everybody" control={<Radio size="small" />} label="Everybody" />
                                <FormControlLabel value="My friends" control={<Radio size="small" />} label="My friends" />
                                <FormControlLabel value="NoBody" control={<Radio size="small" />} label="NoBody" />
                                <FormControlLabel value="Custom" disabled control={<Radio size="small" />} label="(Premium)" />
                            </RadioGroup>
                        </div>
                        <div className={classes.item}>
                            <Button
                                variant="outlined"
                                color="primary"
                                style={{ marginRight: 20 }}
                                onClick={() => { setOpenAlert(true); setOpen(false); }}
                            >Create</Button>
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={() => setOpen(false)}
                            >Cancel</Button>
                        </div>
                    </form>
                </Container>
            </Modal>
            <Snackbar
                open={openAlert}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            >
                <Alert onClose={handleClose} severity="success">
                    This is a test creation message!
                </Alert>
            </Snackbar>
        </>
    );
};

export default Add;