import Paper from '@material-ui/core/Paper';
import useStyles from './styles';

import { Typography } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import EachResident from '../EachResident/EachResident';

import { CardContent } from '@material-ui/core';

const SnippetPaper = ({ residentList }) => {
    const classes = useStyles();

    const IterDraw = ({ details }) => {
        return <EachResident data={details} />

    }

    const IterMatch = ({ header, details }) => {
        return <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-headesssssssssssssr"
            >
                <Typography className={classes.heading}>
                    <CardContent>
                        <Typography variant="h6" color="textSecondary" gutterBottom style={{ color: '#9c27b0', fontSize: '20px' }}>
                            {header}
                        </Typography>
                    </CardContent>
                </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ background: `#3f51b5` }}>
                <IterDraw details={details} />
            </AccordionDetails>
        </Accordion>
    }

    const IterBill = ({ residentList }) => {
        return <>
            {
                residentList.map((each) => {
                    console.log('map details', each['details']);
                    return <IterMatch header={each['header']} details={each['details']} />
                })
            }
        </>
    }

    return <div className={classes.root}>
        <Paper elevation={3} style={{ padding: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#e91e6380', }}>
            <Typography variant="h4" style={{ margin: '10px', color: 'white' }}>
                Resident history
            </Typography>
            <IterBill residentList={residentList} />
        </Paper>
    </div>
}

export default SnippetPaper;