import Checkout from './Form';
import useStyles from './styles';
import { Container, Typography, Link, Box, Grid } from '@material-ui/core';

import clsx from 'clsx';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center" style={{ color: '#3f51b5' }}>
            {'Copyright © '}
            <Link color="inherit" href="https://www.facebook.com/thuc.katy" style={{ color: '#f44336' }}>
                IU Dormitory
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const NewStudent = ({ open }) => {
    const classes = useStyles();

    return <main className={clsx(classes.content, {
        [classes.contentShift]: open,
    })}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth={'md'} className={classes.container}>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Checkout />
                </Grid>
            </Grid >
            <Box pt={4}>
                <Copyright />
            </Box>
        </Container>
    </main>
}

export default NewStudent;