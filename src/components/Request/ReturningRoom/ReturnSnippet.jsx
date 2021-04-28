import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { REMOVE_RETURN } from '../FixingRoom/FixingRequest/RequestInfor';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '50%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.primary,
    //   fontWeight: 400,
    },
    secondaryHeadingStatus: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
      },
    button: {
        margin: theme.spacing(1),
      },
  }));

export default function ReturnSnippet() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const ReturnRequest = useSelector((state)=>state.RequestList.ReturnInfor);
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    const handleRemoveSnip = (return_id) => {
      dispatch({
        type: REMOVE_RETURN,
        return_id: return_id,
      })
    };

  
    return (
      <div className={classes.root}>
        {ReturnRequest.map((request, index)=>(
          <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>Your Returning Request</Typography>
            <Typography className={classes.secondaryHeadingStatus}>Status</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.heading}>
              Name:
            </Typography>
            <Typography className={classes.secondaryHeading}>
              {request.name}
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
          <Typography className={classes.heading}>
              ID:
            </Typography>
            <Typography className={classes.secondaryHeading}>
              {request.id}
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
          <Typography className={classes.heading}>
              Gender:
            </Typography>
            <Typography className={classes.secondaryHeading}>
              {request.gender}
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
          <Typography className={classes.heading}>
              Room:
            </Typography>
            <Typography className={classes.secondaryHeading}>
              {request.room}
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
          <Typography className={classes.heading}>
              Return Date (MM-DD/YYYY):
            </Typography>
            <Typography className={classes.secondaryHeading}>
              {[('0' + request.date.getMonth()).slice(-2), ('0' + request.date.getDate()).slice(-2), request.date.getFullYear()].join('-')}
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
          <Typography className={classes.heading}>
              Feed Back:
            </Typography>
            <Typography className={classes.secondaryHeading}>
              {request.feedback}
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DeleteIcon />}
            onClick={()=>handleRemoveSnip(request.return_id)}
          >
            Delete
          </Button>
          </AccordionDetails>
        </Accordion>
        ))}
      </div>
    );
}