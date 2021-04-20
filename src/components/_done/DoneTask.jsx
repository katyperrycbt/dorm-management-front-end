import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        position: 'absolute',
        top: '75px',
        left: '50px',
        zIndex: 100,
        backgroundColor: 'yellow'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function DoneTask() {
    const classes = useStyles();
    const [open, setOpen] = useState(true);

    return (
        <>
            {
                open && <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            For group members:
                        </Typography>
                        <Typography variant="h5" component="h2">
                            This is a tag that talks about the work done on the front-end side
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            At 05:30pm 04/17/2021
                        </Typography>
                        <Typography variant="body2" component="p">
                            <b>Login page:</b> almost done (waiting for the back-end side)
                            <br />
                            <b>Log out [side menu]:</b> done
                            <br />
                            <b>Home page shortcut [side menu]:</b> done
                            <br />
                            <b>Personal information [side menu]:</b> done
                            <br />
                            <b>Some decorations added</b>
                            <br/>
                            <b>Resident information [side menu]:</b> done
                            <br/>
                            <b>Bills [side menu]:</b> done
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Katyperrycbt</Button>
                    </CardActions>
                    <CardActions style={{ right: '-100px', position: 'relative' }}>
                        <Button size="small" onClick={() => setOpen(false)}>Close</Button>
                    </CardActions>
                </Card>
            }
        </>
    );
}
