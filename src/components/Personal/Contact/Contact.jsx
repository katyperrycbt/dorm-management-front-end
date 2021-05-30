import { Paper, Grid, Avatar, Typography, Container } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import CardContent from '@material-ui/core/CardContent';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useStyles from './styles';

const Contact = ({ header, content, icon }) => {
    const classes = useStyles();
    const IterDraw = () => {
        return <>
            {
                Object.keys(content).map((key, index) => {
                    const NowIcon = icon[index];
                    return (
                        <Grid container key={`g${index}`} style={{ borderBottom: '1px solid gray' }}>
                            <Grid item xs={12} className={classes.space} >' '</Grid>
                            <Grid item md={3} sm={4} xs={12} className={classes.root2}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <NowIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText secondary={key} />
                                </ListItem>
                            </Grid>
                            <Grid item md={6} sm={4} />
                            <Grid item md={3} sm={4} xs={12} className={classes.root3}>
                                <ListItem className={classes.root6}>
                                    <ListItemText primary={content[key]} />
                                </ListItem>
                            </Grid>
                            <Grid item md={6} sm={4} />
                        </Grid>
                    )
                })
            }
        </>
    }

    return <Container className={classes.root} maxWidth='md'>
        <Paper elevation={3} style={{ borderRadius: '10px' }}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>
                        <CardContent>
                            <Typography variant="h6" color="textSecondary" gutterBottom>
                                {header}
                            </Typography>
                        </CardContent>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={0}>
                        <IterDraw />
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </Paper>
    </Container>

}

export default Contact;