import { exportComponentAsJPEG } from "react-component-export-image";
import React, { useRef } from "react";
import "./App.css";
import { Container, makeStyles, Button } from "@material-ui/core";
import { Quote } from "./components/Quote";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "1rem auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alighItems: "center",
  },

  btn: {
    margin: "1rem auto",
    width: "200px",
  },
}));

const ComponentToPrint = React.forwardRef((props, ref) => (
  <div
    style={{ margin: "auto", width: "min-content", height: "min-content" }}
    ref={ref}
  >
    <Quote />
  </div>
));

function App() {
  const componentRef = useRef();

  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.container}>
        <ComponentToPrint ref={componentRef} />
        <Button
          className={classes.btn}
          variant="contained"
          color="secondary"
          onClick={() => exportComponentAsJPEG(componentRef)}
        >
          Export As JPEG
        </Button>
      </Container>
    </React.Fragment>
  );
}

export default App;
