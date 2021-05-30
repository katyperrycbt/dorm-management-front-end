import { useEffect, useState } from 'react';
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
    const [resident, setResident] = useState(useSelector((state) => state.studentSee));
    useEffect(() => {
        dispatch({ type: SET_LINEAR, data: true });
        dispatch(see(STUDENT_SEE_RESIDENT)).then((rs) => {
            dispatch({ type: SET_LINEAR, data: false });
            dispatch({
                type: SET_SNACK, data: {
                    open: true,
                    msg: 'Done!'
                }
            });
            setResident(rs);
        }).catch((err) => {
            dispatch({ type: SET_LINEAR, data: false });
            dispatch({
                type: SET_SNACK, data: {
                    open: true,
                    msg: err.message
                }
            })
        })
    }, [dispatch])

    const residentSample = resident.residentList ? resident.residentList : {
        'Dorm': 'A',
        'Block': 'B',
        'Room': '3212',
        'Semester': 'Full year (2020-2021)',
        'Created at': '04/16/2021 8h49pm',
        'Room type': 'classical',
        'Dorm ID': 'AB3212',
        'From': '04/16/2021',
        'To': '04/16/2022',
        'Note': ''
    }

    const sampleHeader = `Dorm ${residentSample['Dorm']} - Block ${residentSample['Block']} - Room ${residentSample['Room']}. ${residentSample['Semester']}`;
    const residentList = [{ 'header': sampleHeader, 'details': residentSample }];

    return <Container maxWidth='lg' className={classes.root}>
        {/* <SnippetPaper residentList={residentList} /> */}
        <Alternative residentList={residentList} />
        {/* <EachResident header={sampleHeader} data={residentSample} /> */}
    </Container>
}

export default Resident;