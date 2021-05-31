import { useState } from 'react';
import {
    Typography, Container, Grid, Paper,
    Accordion, AccordionSummary, AccordionDetails
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import clsx from 'clsx';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import marked from 'marked';
import ReactMarkDown from 'react-markdown';

const Account = ({ open, rawData }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const [user, setUser] = useState(useSelector((state) => state.studentAccount));

    const Draw = () => {
        console.log(marked(rawData['details']));
        return (marked(rawData['details']))
    }

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
                            style={{ backgroundColor: '#4caf50' }}
                        >
                            <Typography align="center" variant='h6' style={{ color: '#fff' }}>{rawData['header']}</Typography>
                        </AccordionSummary>
                        <AccordionDetails classes={{ root: classes.cc }}>
                            <Paper style={{padding: '0px 6px 0px 6px'}}>
                                <ReactMarkDown className={classes.notBlack}>
                                    {rawData['details']}
                                </ReactMarkDown>
                            </Paper>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </Container>
    </main>
}

export default Account;