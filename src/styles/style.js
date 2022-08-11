import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    // backgroundColor: theme.palette.background.paper, // For this need to learn theme
    padding: "20px 0",
    backgroundColor: "#f8f8f8",
  },
  icon: {
    marginRIght: "20px",
  },
  buttons: {
    marginTop: "40px",
  },
  cardGrid: {
    padding: "20px 0",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", //16/9
  },
  cardConent: { flexGrow: "1" },
  footer: {
    background: "#f8f8f8",
    padding: "50px 0",
  },
}));

export default useStyles;
