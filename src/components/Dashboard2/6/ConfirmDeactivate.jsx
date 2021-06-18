import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { Typography } from '@material-ui/core';
import { deactivateAccount } from '../../../actions/admin.stuff';
import { useDispatch } from 'react-redux';
import { SET_SNACK, SET_LINEAR } from '../../../constants/constants';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import clsx from 'clsx';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
    buttonSuccess: {
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
    fabProgress: {
        color: green[500],
        position: 'absolute',
        top: -6,
        left: -6,
        zIndex: 1,
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
}));

export default function AlertDialog({ studentId, roomId }) {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    const classes = useStyles();

    const dispatch = useDispatch();

    const handleClickOpen = () => {
        setLoading(false);
        setSuccess(false);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const buttonClassname = clsx({
        [classes.buttonSuccess]: success,
    });


    const handleDeactivate = () => {
        setLoading(true);
        setSuccess(false);
        if (studentId && roomId) {
            dispatch({ type: SET_LINEAR, data: true });
            deactivateAccount({ _id: roomId, student: studentId }).then((rs) => {
                dispatch({ type: SET_LINEAR, data: false });
                if (rs?.message) {
                    dispatch({
                        type: SET_SNACK, data: {
                            open: true,
                            msg: rs.message
                        }
                    });
                    setLoading(false);
                    setSuccess(false);
                } else {
                    dispatch({
                        type: SET_SNACK, data: {
                            open: true,
                            msg: 'Done!'
                        }
                    });
                    setLoading(false);
                    setSuccess(true);
                    setTimeout(() => {
                        setOpen(false);
                    }, 1000);
                }
            }).catch((err) => {
                dispatch({ type: SET_LINEAR, data: false });
                dispatch({
                    type: SET_SNACK, data: {
                        open: true,
                        msg: 'Oops! Fail to deactivate, try again!'
                    }
                });
                setLoading(false);
                setSuccess(false);
            });
        } else {
            dispatch({
                type: SET_SNACK, data: {
                    open: true,
                    msg: 'Oops! Missing selected student, do again!'
                }
            });
            setLoading(false);
            setSuccess(false);
        }
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                De-activate this account
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Typography align="center" variant="h4" style={{ color: '#ff3d00', margin: '10px 15px 5px 15px' }}>
                    You confirm that you are about to lock this account.
                </Typography>
                <DialogContent>
                    <Typography style={{ color: '#00695f' }}>
                        Should note and remind students that by taking this action, the student will not be able to log into the system through that account unless you reopen it.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Disagree
                    </Button>
                    {/* <Button onClick={handleDeactivate} color="primary" autoFocus>
                        Agree
                    </Button> */}
                    <div className={classes.wrapper}>
                        <Button
                            variant="contained"
                            color="primary"
                            className={buttonClassname}
                            disabled={loading}
                            onClick={handleDeactivate}
                        >
                            Agree
                        </Button>
                        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                    </div>
                </DialogActions>
            </Dialog>
        </div>
    );
}
