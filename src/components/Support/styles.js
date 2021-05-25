import { makeStyles } from "@material-ui/core/styles";

export default makeStyles ((theme) => ({
    root:{
        position: 'relative',
        top: 75,
        left: 50,
        zIndex: 10000,
    },
    modal:{
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
        zIndex: 20000,
    },
    paper:{
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
    },
    accordion:{
        width: '50%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightBold,
      },
}))