import { useState, useEffect } from 'react';
import { Grid, Button, Typography, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import useStyles from './styles';
import AutoCompleteEmail from './AutoCompleteEmail';

import { SET_SNACK, SET_LINEAR } from '../../../constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStudentsWithTheirRoomInfo } from '../../../actions/admin.stuff';
import { getAvaiRoom, updateStudentRoom } from '../../../actions/admin.stuff';

import RoomSelect from '../4/RoomSelect';

const init = {
    _id: '',
    email: '',
    room: ''
}
const ChangeRoom = () => {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState(false);
    const [currentStudent, setCurrentStudent] = useState({});
    const [rooms, setRooms] = useState([]);
    const [value, setValue] = useState(4);
    const [formData, setFormData] = useState(init);

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

    console.log('list of student', data);

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
            _id: found._id
        }
        setCurrentStudent(found ? temp : {
            email: 'student@email.com',
            room: 'B3212',
            _id: 'ssadsdqasdwsadqwsasda',
            current: 'Not found'
        })
        setConfirmEmail((old) => !old);
    }

    const handleSaveChange = (e) => {
        e.preventDefault();
        dispatch({ type: SET_LINEAR, data: true });
        const form = {
            email: formData.email ? formData.email : currentStudent.email,
            _id: formData._id ? formData._id : currentStudent._id,
            room: formData.room ? formData.room : currentStudent.room,
            oldRoom: currentStudent?.current !== 'Not found' ? currentStudent.current : null
        }
        console.log(form);
        if (form.email && form._id && form.room) {
            updateStudentRoom(form).then((rs) => {
                dispatch({ type: SET_LINEAR, data: false });
                console.log(rs);
                if (rs?.message) {
                    dispatch({
                        type: SET_SNACK, data: {
                            open: true,
                            msg: rs.message
                        }
                    });
                } else {
                    dispatch({
                        type: SET_SNACK, data: {
                            open: true,
                            msg: 'Done!'
                        }
                    });
                    setRooms(rs);
                    setValue(e.target.value);
                }
            }).catch((err) => {
                dispatch({ type: SET_LINEAR, data: false });
                dispatch({
                    type: SET_SNACK, data: {
                        open: true,
                        msg: 'Oops! Fail to select, try again!'
                    }
                });
            });
        } else {
            dispatch({
                type: SET_SNACK, data: {
                    open: true,
                    msg: 'Missing info. Please do again the whole steps.'
                }
            });
        }
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
            <Typography align="center" variant="h4" style={{ color: '#673ab7' }}>Old Room</Typography>
            <Typography align="left">Name: {currentStudent.email || ''}</Typography>
            <Typography align="left">Old room: {currentStudent.room || ''}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
            <Typography align="center" variant="h4" style={{ color: '#f50057' }}>New Room</Typography>
            <FormControl className={classes.formControl} fullWidth required>
                <InputLabel id={`demos${Date.now()}-simple-select-label`}>Room type</InputLabel>
                <Select
                    labelId="demo-saaaample-sesqsxxsswlect-label"
                    id="demaaaaaaaaawwwwwwwaao-simple-select"
                    value={value}
                    onChange={async (e) => {
                        dispatch({ type: SET_LINEAR, data: true });
                        getAvaiRoom(e.target.value).then((rs) => {
                            dispatch({ type: SET_LINEAR, data: false });
                            dispatch({
                                type: SET_SNACK, data: {
                                    open: true,
                                    msg: 'Done!'
                                }
                            });
                            setRooms(rs);
                            setValue(e.target.value);
                        }).catch((err) => {
                            dispatch({ type: SET_LINEAR, data: false });
                            dispatch({
                                type: SET_SNACK, data: {
                                    open: true,
                                    msg: 'Oops! Fail to select, try again!'
                                }
                            });
                        });
                    }}
                >
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                </Select>
            </FormControl>
            {
                rooms.length > 0 && <form onSubmit={handleSaveChange} style={{ width: '100%', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <RoomSelect formData={formData} setFormData={setFormData} rooms={rooms} />
                    <Button type="submit" color="secondary" variant="outlined" style={{ marginTop: 10 }}>
                        Save
                    </Button>
                </form>
            }
        </Grid>
    </Grid>)
}

export default ChangeRoom;