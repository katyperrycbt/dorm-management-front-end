import { makeStyles } from '@material-ui/core';

export default makeStyles ((theme) => ({
    root:{
        position: 'relative',
        top: 60
    },
    image:{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        maskImage:
        "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.05))",
        top: 20, left: 0,
        zIndex: -500,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed'
    }
}))