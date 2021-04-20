import Paper from '@material-ui/core/Paper';
import useStyles from './styles';

import { Typography } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { Grid, CardContent } from '@material-ui/core';

const SnippetPaper = ({ residentList }) => {
    const classes = useStyles();
    
    const IterDraw = ({ details }) => {
        return <>
            {
                Object.keys(details).map((key, index) => {
                    // const NowIcon = details[key][0];
                    return (
                        <Grid container key={`snippet${details[key]}${index}`} style={{ borderBottom: '1px solid gray'}}>
                            <Grid item md={3} sm={4} xs={12} className={classes.root2}>
                                <ListItem>
                                    {/* <ListItemAvatar>
                                        <Avatar>
                                            <NowIcon />
                                        </Avatar>
                                    </ListItemAvatar> */}
                                    <ListItemText primary={key}/>
                                </ListItem>
                            </Grid>
                            <Grid item md={6} sm={4} />
                            <Grid item md={3} sm={4} xs={12} className={classes.root3}>
                                <ListItem className={classes.root6}>
                                    <ListItemText primary={details[key]}/>
                                </ListItem>
                            </Grid>
                            <Grid item md={6} sm={4} />
                        </Grid>
                    )
                })
            }
        </>
    }

    const IterMatch = ({ header, details }) => {
        return <Accordion style={{borderRadius: '20px', background: `#ffeb3b`, color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'space-between'}}>
            <AccordionSummary   
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                // style={{display: 'flex', flexDirection: 'row', alignItems: 'space-between'}}
            >
                <Typography className={classes.heading}>
                    <CardContent>
                        <Typography variant="h6" color="textSecondary" gutterBottom style={{color: '#9c27b0', fontSize: '20px'}}>
                            {header}
                        </Typography>
                    </CardContent>
                </Typography>
            </AccordionSummary>
            <AccordionDetails style={{background: `#3f51b5`}}>
                <Grid container spacing={0}>
                    <IterDraw details={details} />
                </Grid>
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
            <Typography variant="h4" style={{margin: '10px', color: 'white'}}>
                Resident history
            </Typography>
            <IterBill residentList={residentList} />
        </Paper>
    </div>
}

export default SnippetPaper;