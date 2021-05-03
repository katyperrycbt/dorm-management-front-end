import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 600
  },
  image: {
    width: "100%",
    height: "50%",
    objectFit: "cover",
    maskImage:
      "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.05))"
  },
  blur: {
    position: "absolute",
    zIndex: 1,
    color: "#fff",
    backgroundColor: "rgb(0,0,0)",
    backgroundColor: "rgba(0,0,0,0.6)",
    fontWeight: "bold",
    border: "3px solid #f1f1f1",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    padding: 20,
    fontSize: 20,
    textTransform: "uppercase",
    textAlign: "center"
  }
}));
