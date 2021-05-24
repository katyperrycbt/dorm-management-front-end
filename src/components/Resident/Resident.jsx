import SnippetPaper from './SnippetPaper/SnippetPaper';
import { Container } from '@material-ui/core';
import useStyles from './styles';
import { useHistory } from 'react-router-dom';

const Resident = () => {
    const history = useHistory();
    const profile = JSON.parse(localStorage.getItem('user'));
    const classes = useStyles();

    if (!profile) {
        history.push('/');
        return <></>;
    }

    const residentSample = profile.info?.residentList ? profile.info?.residentList : {
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
    const residentList = [{'header': sampleHeader, 'details': residentSample}];

    return <Container maxWidth='md' className={classes.root}>
        <SnippetPaper residentList={residentList} />
    </Container>
}

export default Resident;