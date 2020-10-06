import React, { useState, useEffect } from "react";
import { Typography, Box, Card } from "@material-ui/core";
import { URL } from "../constants/routes";
import axios from "axios";

export const Quote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  useEffect(() => {
    const fetchQuote = async () => {
      const res = await axios.get(URL);
      //   const result = res.data;
      const { quote, author } = res.data.contents.quotes[0];
      setAuthor(author);
      setQuote(quote);
    };
    fetchQuote();
  }, []);
  return (
    <>
      <Card
        style={{
          borderRadius: "8px",
          border: "none",
          boxShadow: "0px 0px 20px #cccccc",
          padding: "2rem",
          margin: "2rem",
        }}
      >
        <Typography style={{ fontFamily: "Gilroy", fontWeight: "900" }}>
          {quote}
        </Typography>
        <Typography>{author}</Typography>
      </Card>
    </>
  );
};
