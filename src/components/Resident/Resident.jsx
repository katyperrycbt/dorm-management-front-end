import { useEffect } from 'react';
// import SnippetPaper from './SnippetPaper/SnippetPaper';
import { Container } from '@material-ui/core';
import useStyles from './styles';
import { useHistory } from 'react-router-dom';
// import EachResident from './EachResident/EachResident';
import Alternative from './SnippetPaper/Alternative';
import { useDispatch, useSelector } from 'react-redux';
import { STUDENT_SEE_RESIDENT } from '../../constants/constants';
import { SET_SNACK, SET_LINEAR } from '../../constants/constants';
import { see } from '../../actions/student.see';
const Resident = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: SET_LINEAR, data: true });
        dispatch({
            type: SET_SNACK, data: {
                open: true,
                msg: 'Loading...'
            }
        });
        dispatch(see(STUDENT_SEE_RESIDENT)).then((rs) => {
            dispatch({ type: SET_LINEAR, data: false });
            dispatch({
                type: SET_SNACK, data: {
                    open: true,
                    msg: 'Done!'
                }
            });
        }).catch((err) => {
            dispatch({ type: SET_LINEAR, data: false });
            dispatch({
                type: SET_SNACK, data: {
                    open: true,
                    msg: err.message
                }
            })
        })
    }, [dispatch]);

    const resident = useSelector((state) => state.studentSee);

    // console.log(resident);

    // const residentSample = resident.residentList ? resident.residentList : {
    //     'Dorm': 'A',
    //     'Block': 'B',
    //     'Room': '3212',
    //     'Semester': 'Full year (2020-2021)',
    //     'Created at': '04/16/2021 8h49pm',
    //     'Room type': 'classical',
    //     'Dorm ID': 'AB3212',
    //     'From': '04/16/2021',
    //     'To': '04/16/2022',
    //     'Note': ''
    // }

    // const sampleHeader = `Dorm ${residentSample['Dorm']} - Block ${residentSample['Block']} - Room ${residentSample['Room']}. ${residentSample['Semester']}`;
    const residentList = [];

    for (let i = 0; i < resident.length; i++) {
        const tempHeader = `Dorm ${resident[i]['dorm']} - Block ${resident[i]['block']} - Room ID ${resident[i]['dorm_ID']}`;

        const tempDetails = {
            'Dorm': resident[i]?.dorm ? resident[i].dorm : 'Not found',
            'Block': resident[i]?.block ? resident[i].block : 'Not found',
            'Floor': resident[i]?.floor ? resident[i].floor : 'Not found',
            'Room': resident[i]?.room ? resident[i].room : 'Not found',
            'Room type': resident[i]?.room_type ? resident[i].room_type : 'Not found',
            'Dorm ID': resident[i]?.dorm_ID ? resident[i].dorm_ID : 'Not found',
            'Note': resident[i]?.note ? resident[i].note : 'Not found'
        }

        residentList.push({ 'header': tempHeader, 'details': tempDetails });
    }

    return <Container maxWidth='lg' className={classes.root}>
        {/* <SnippetPaper residentList={residentList} /> */}
        <Alternative residentList={residentList} />
        {/* <EachResident header={sampleHeader} data={residentSample} /> */}
    </Container>
}

export default Resident;