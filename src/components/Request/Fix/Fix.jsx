import { useState } from 'react';
import useStyles from './styles';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Container, Tooltip } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

import ModalForm from './ModalForm/ModalForm';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    childre: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};


export default function Fix() {
    const classes = useStyles();
    // const isOpen = useSelector((state) => state.isOpen.openState);
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false)

    return (
        <Container maxWidth='lg' className={classes.root}>
            <ModalForm open={open} setOpen={setOpen} />
            <Typography variant="h4" style={{ color: '#2a3eb1' }}>Fixing request list</Typography>
            <Tooltip title='Make request'>
                <Fab
                    color='primary'
                    onClick={() => setOpen(true)}
                >
                    <EditIcon />
                </Fab>
            </Tooltip>
        </Container>
    )
}