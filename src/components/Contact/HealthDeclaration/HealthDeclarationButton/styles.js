import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    root: {
        display: "flex",
        textAlign: "center",
        flexDirection: "column",
        width: "100%"
      },
      paper: {
        padding: theme.spacing(2),
        margin: "auto",
        maxWidth: "100%",
        "&:hover": {
          cursor: "pointer",
          boxShadow: "5px 10px #888888",
          transition: "0.3s",
          border: "1px solid #333"
        },
        background: '#adadac'
      },
      modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflowY: 'auto',
        paddingTop: '150px'
      }
}))