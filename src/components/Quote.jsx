import React, { useState, useEffect } from "react";
import { Typography, Box, Card, makeStyles } from "@material-ui/core";
import { URL } from "../constants/routes";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  cardCont: {
    margin: "auto",
    backgroundColor: "#0110f9",
    padding: "3rem",
    width: "min-content",
  },
  card: {
    position: "relative",

    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "500px",
    height: "500px",
    // height: "min-content",
    borderRadius: "8px",
    boxShadow: "0px 0px 20px #010a94",
    padding: "2rem",
  },
  quote: {
    fontSize: "1.25rem",
    fontFamily: "Poppins",
    fontWeight: "700",
  },
  author: {
    marginTop: "1.5rem",
    fontSize: "1rem",
    fontFamily: "Poppins",
    fontWeight: "600",
  },
  leftbottom: {
    position: "absolute",
    bottom: "2rem",
    fontWeight: "700",
    fontFamily: "Poppins",
    left: "2rem",
    color: "#0110f9",
  },
  lefttop: {
    position: "absolute",
    top: "2rem",
    fontWeight: "700",
    fontFamily: "Poppins",
    left: "2rem",
    color: "#ff007b",
    "&:before": {
      content: "",
      width: "100%",
      height: "10px",
      backgroundColor: "#ff007b",
    },
  },
}));

export const Quote = () => {
  const classes = useStyles();
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  useEffect(() => {
    const fetchQuote = async () => {
      const res = await axios.get(URL);
      //   const result = res.data;
      const { quote, author, category } = res.data.contents.quotes[0];
      //   console.log(res.data.contents.quotes[0]);
      setAuthor(author);
      setQuote(quote);
      setCategory(category);
    };
    fetchQuote();
  }, []);
  return (
    <>
      <Box className={classes.cardCont}>
        <Card className={classes.card}>
          <Typography className={classes.lefttop}>{category}</Typography>
          <Typography className={classes.leftbottom}>
            Follow @quotipy for more
          </Typography>
          <Typography className={classes.quote}>{quote}</Typography>
          <Typography className={classes.author}>{author}</Typography>
        </Card>
      </Box>
    </>
  );
};
