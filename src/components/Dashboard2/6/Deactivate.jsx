import { useState, useEffect } from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import useStyles from './styles';
import AutoCompleteEmail from './AutoCompleteEmail';

import { SET_SNACK, SET_LINEAR } from '../../../constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStudentsWithTheirRoomInfo } from '../../../actions/admin.stuff';
import ConfirmDeactivate from './ConfirmDeactivate';

const ChangeRoom = () => {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState(false);
    const [currentStudent, setCurrentStudent] = useState({});

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: SET_LINEAR, data: true });
        dispatch(getAllStudentsWithTheirRoomInfo()).then((rs) => {
            if (rs?.message) {
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
                    msg: 'Oops! Fail to get data, try again!'
                }
            });
        });
    }, [dispatch]);

    const data = useSelector((state) => state.getAllStudentsWithTheirRoomInfo);

    const fakeData = [
        { email: 'thuc', _id: 'ddsdsadxa' },
        { email: 'thuc', _id: 'ddsdsadxa' },
        { email: 'thuc', _id: 'ddsdsadxa' },
        { email: 'thuc', _id: 'ddsdsadxa' },
        { email: 'thuc', _id: 'ddsdsadxa' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const found = data.find(x => x.email === email);
        const temp = {
            email: found.email,
            room: found?.room ? found.room.dorm_ID : 'Not found',
            current: found?.room ? found.room._id : 'Not found',
            _id: found._id,
            active: found.active === true ? 'Active' : 'In-acctive'
        }
        setCurrentStudent(found ? temp : {
            email: 'student@email.com',
            room: 'B3212',
            _id: 'ssadsdqasdwsadqwsasda',
            current: 'Not found',
            active: 'Not found'
        })
        setConfirmEmail((old) => !old);
    }


    return (<Grid container spacing={3} >
        <Grid item xs={12} sm={12} md={12} lg={4}>
            <Typography align="center" variant="h4" style={{ color: '#357a38' }}>Choose account</Typography>
            <form onSubmit={handleSubmit}>
                <AutoCompleteEmail data={data.length > 0 ? data : fakeData} email={email} setEmail={setEmail} disabled={confirmEmail} />
                <Button type="submit" style={{ marginTop: '8px', backgroundColor: '#00695f', color: '#fff' }} className={classes.hv}>
                    {!confirmEmail ? 'Confirm' : 'Choose again'}
                </Button>
            </form>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
            <Typography align="center" variant="h4" style={{ color: '#673ab7' }}>Current Room</Typography>
            <Typography align="left">Name: {currentStudent.email || 'Katyperrycbt@gmail.com'}</Typography>
            <Typography align="left">Old room: {currentStudent.room || 'B3212'}</Typography>
            <Typography align="left">Account status: {currentStudent.active || 'Active'}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
            <Typography align="center" variant="h4" style={{ color: '#f50057' }}>De-activate Account</Typography>
            <div style={{ width: '100%', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <ConfirmDeactivate studentId={currentStudent._id} roomId={currentStudent.current} />
            </div>
        </Grid>
    </Grid>)
}

export default ChangeRoom;