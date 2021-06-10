import React from 'react';
import useStyles from './styles';
// import { useSelector, useDispatch } from 'react-redux';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

// import { useHistory } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { studentRequestFix } from '../../../../actions/student.request';
import { useDispatch } from 'react-redux';
import { SET_LINEAR, SET_SNACK } from '../../../../constants/constants';

export default function RequestForm({ open, setOpen }) {
    const [formData, setFormData] = React.useState({ fixnote: '', image: '' });
    const [link, setLink] = React.useState('');

    // const history = useHistory();
    const classes = useStyles();

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: SET_LINEAR, data: true });
        dispatch({
            type: SET_SNACK, data: {
                open: true,
                msg: 'Sending...'
            }
        });

        dispatch(studentRequestFix(formData)).then((rs) => {
            if (rs.message) {
                dispatch({ type: SET_LINEAR, data: false });
                dispatch({
                    type: SET_SNACK, data: {
                        open: true,
                        msg: rs.message
                    }
                });

            } else {
                dispatch({ type: SET_LINEAR, data: false });
                dispatch({
                    type: SET_SNACK, data: {
                        open: true,
                        msg: 'Done!'
                    }
                });
            }
        }).catch((err) => {
            dispatch({ type: SET_LINEAR, data: false });
            dispatch({
                type: SET_SNACK, data: {
                    open: true,
                    msg: err.message
                }
            });
        });
    }

    const handleClose = () => {
        setOpen(false);
    }

    const imageRef = React.useRef(null);

    const handleFileRead = async (event) => {
        const file = event.target.files[0];
        const base64 = await convertBase64(file);
        setFormData({ ...formData, image: base64 });
        setLink(URL.createObjectURL(event.target.files[0]));
    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result);
            }
            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.root}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 500 }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <Typography variant='h6' style={{ backgroundColor: "lightblue", padding: '30px', textAlign: 'center' }}>Request Form</Typography>
                        <Typography>Please fill all the information below</Typography>
                        <form className={classes.request} noValidate autoComplete="off" onSubmit={handleSubmit}>
                            <TextField required id="fix_content" name='fixnote' label="Content" variant="outlined" rowsMin={3} onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} />
                            <TextField
                                id="fix_image"
                                type="file"
                                inputProps={{ accept: 'image/*' }}
                                InputLabelProps={{ shrink: true, color: "primary" }}
                                label="Report image"
                                name="image"
                                onChange={handleFileRead}
                                size="small"
                                variant="outlined"
                                required
                                fullWidth
                            />
                            {link && <img ref={imageRef} src={link} alt="" style={{ maxWidth: '200px' }} />}
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                endIcon={<SendIcon />}
                                type='submit'
                            >
                                Send
                            </Button>

                        </form>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}