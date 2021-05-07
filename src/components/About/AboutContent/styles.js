import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {

  },
  container: {
    display: 'flex',
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
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
  },
  blur: {
    position: "absolute",
    zIndex: 1,
    color: "#fff",
    // backgroundColor: "rgb(0,0,0)",
    backgroundColor: "rgba(0,0,0,0.6)",
    fontWeight: "bold",
    border: "3px solid #f1f1f1",
    top: "70%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    padding: 20,
    fontSize: 20,
    textTransform: "uppercase",
    textAlign: "center"
  }
}));
