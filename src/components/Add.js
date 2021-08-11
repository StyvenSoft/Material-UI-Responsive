import { Container, Fab, makeStyles, Modal, TextField, Tooltip } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import { useState } from 'react';

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
}));

const Add = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)

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
                            <TextField id="standard-basic" label="title" size="small" style={{width: "100%"}} />
                        </div>
                        <div className={classes.item}>
                            <TextField id="standard-basic" label="Description" size="small" style={{width: "100%"}} />
                        </div>
                    </form>
                </Container>
            </Modal>
        </>
    );
};

export default Add;