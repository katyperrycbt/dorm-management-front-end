import { useState } from 'react';
import {
    Typography, Container, Grid, Paper,
    Accordion, AccordionSummary, AccordionDetails
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import clsx from 'clsx';
import useStyles from './styles2';
import { useSelector } from 'react-redux';

const Account = ({ open, rawData, inputColor }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const [user, setUser] = useState(useSelector((state) => state.studentAccount));

    if (!user.email) {
        setUser({ email: 'katyperrycbt@gmail.com', password: 'hassssss' });
    }

    return <main className={clsx(classes.content, {
        [classes.contentShift]: open,
    })}>
        {/* <div className={classes.appBarSpacer} /> */}
        <Container maxWidth={'lg'} className={classes.container} style={{ margin: 0 }}>
            <Grid container spacing={3} style={{ padding: '5px' }}>
                <Grid item xs={12}>

                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id={`panel1a-hessssss${Date.now()}ader`}
                            style={{backgroundColor: inputColor}}
                        >
                            <Typography align="center" style={{ color: '#fff' }}>{rawData['header']}</Typography>
                        </AccordionSummary>
                        <AccordionDetails classes={{ root: classes.cc }}>
                            <Paper>
                                {
                                    Object.keys(rawData['details']).map((key, index) => {
                                        return (
                                            <Accordion key={`dwjiossqqqqqqqqqccccc${Date.now()}${Math.random()}`}>
                                                <AccordionSummary
                                                    aria-controls="panel1bh-content"
                                                    id="panel1bh-header"
                                                >
                                                    <Typography className={classes.heading}>{key}</Typography>
                                                    <Typography className={classes.secondaryHeading}>{rawData['details'][key]}</Typography>
                                                </AccordionSummary>
                                            </Accordion>
                                        )
                                    })
                                }
                            </Paper>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </Container>
    </main>
}

export default Account;