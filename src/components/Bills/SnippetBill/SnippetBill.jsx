import Paper from '@material-ui/core/Paper';
import useStyles from './styles';
// import { useEffect, useState } from 'react';
import { Typography, Avatar } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import { Grid } from '@material-ui/core';


const SnippetBill = ({ residentList, color1, color2, color3 }) => {
    const classes = useStyles();

    const IterDraw = ({ details }) => {
        return <>
            {
                Object.keys(details).map((key, index) => {
                    const NowIcon = details[key][0];
                    return (
                        <Grid container key={`bills/snippetbill${details[key]}${index}`} style={{ borderBottom: '1px solid gray' }}>
                            <Grid item md={3} sm={4} xs={12} className={classes.root2}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <NowIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={key} />
                                </ListItem>
                            </Grid>
                            <Grid item md={6} sm={4} />
                            <Grid item md={3} sm={4} xs={12} className={classes.root3}>
                                <ListItem className={classes.root6}>
                                    <ListItemText primary={details[key][1]} />
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
        return <Accordion style={{ borderRadius: '10px', background: color1, color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'space-between' }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"

            >

                <Grid container className={classes.common}>
                    <Grid item md={7} xs={12}>
                        <Typography variant="caption" color="textSecondary" style={{ color: color2 }}>
                            {header[0]}
                        </Typography>
                        <Typography variant="h5" color="textSecondary" style={{ color: color2}}>
                            {header[1]}
                        </Typography>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <Typography variant="caption" color="textSecondary" style={{ color: color2, display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
                            {header[2]}
                        </Typography>
                    </Grid>
                    <Grid item md={2} xs={12} className={classes.paid} style={{backgroundColor: color3}}>
                        <Typography variant="caption">
                            {header[3]}
                        </Typography>
                    </Grid>
                </Grid>

            </AccordionSummary>
            <AccordionDetails style={{ background: `#3f51b5` }}>
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
            <IterBill residentList={residentList} />
        </Paper>
    </div>
}

export default SnippetBill;