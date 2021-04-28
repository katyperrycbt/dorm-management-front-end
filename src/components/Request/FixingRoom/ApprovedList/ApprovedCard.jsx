import React from 'react';
import { useDispatch } from 'react-redux';
import { DISAPPROVE } from '../FixingRequest/RequestInfor';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { useHistory } from 'react-router-dom';
// import { Translate } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root:{
        // display: 'flex',
        flexGrow: 1,
        maxWidth: 600,
    },
    paper:{
        padding: theme.spacing(2),
        maxWidth: 400,
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(2),
        '&:hover':{
            boxShadow: '10px 20px 10px #333'
        }
    },
    image:{
        width: 128,
        height: 128,
    },
    img:{
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    remove_button:{
        borderRadius: '10px',
        textAlign: 'center',
        background: 'lightgray',
        height: 30,
        '&:hover':{
            cursor: 'pointer',
            background: 'gray',
            transition: '0.3s'
        },
    }

}))

export default function ApprovedCard({ title, image, id, approve, status }) {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch({
            type: DISAPPROVE,
            id: id,
            approve: approve
        })
    }

    console.log(id)
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="No Image"  src={image} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                {/* <Typography variant="body2" color="textSecondary">ID: {id} </Typography> */}
                                <Typography gutterBottom variant="subtitle1">{title}</Typography>
                                {/* <Typography variant="body2" gutterBottom>Content</Typography> */}
                            </Grid>
                            <Grid item>
                                <Typography className={classes.remove_button} variant="body2" onClick={()=>{handleRemove(); history.push('/requests')}}>
                                Remove
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            {/* {approve && (
                                <Typography variant="subtitle1">{approve? "Approved":"Waiting"}</Typography>
                            )} */}
                            {status && (
                                <Typography variant="subtitle1">{status? "Done":"Fixing"}</Typography>
                            )}
                            
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}