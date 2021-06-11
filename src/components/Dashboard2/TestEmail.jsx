import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';

import mailgun from 'mailgun-js';

import { useDispatch } from 'react-redux';
import { SET_SNACK, SET_LINEAR } from '../../constants/constants';

export default function FormDialog({ open, setOpen }) {
    const dispatch = useDispatch();

    const [emailData, setEmailData] = useState({
        from: 'IU Dormitory <no-reply@iu-dormitory.fun>',
        to: '',
        subject: '',
        html: ''
    });


    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        setEmailData({ ...emailData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const mg = mailgun({ apiKey: process.env.REACT_APP_MAILGUN, domain: process.env.REACT_APP_MAILGUN_URL });
        const data = emailData;

        mg.messages().send({
            ...data, function(error, body) {
                dispatch({ type: SET_LINEAR, data: false });
                if (error) {
                    dispatch({
                        type: SET_SNACK, data: {
                            open: true,
                            msg: error
                        }
                    });
                } else {
                    dispatch({
                        type: SET_SNACK, data: {
                            open: true,
                            msg: 'Send successfully!'
                        }
                    });
                    console.log(body);
                }
            }
        });
    }

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <Typography id="form-diadddlog-title" variant="h4" style={{ color: '#3f51b5', margin: '10px 0px 0px 10px' }}>Test Email</Typography>
                <form onSubmit={handleSubmit}>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="dddq112443"
                            label="To"
                            type="email"
                            fullWidth
                            required
                            name="to"
                            onChange={handleChange}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="nam11111e"
                            label="Subject"
                            type="text"
                            fullWidth
                            required
                            name="subject"
                            onChange={handleChange}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="navvvvme"
                            label="Content"
                            type="text"
                            fullWidth
                            name="html"
                            onChange={handleChange}
                            required
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button type='submit' color="primary">
                            Send Email
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}
