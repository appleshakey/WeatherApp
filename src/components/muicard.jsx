import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export default function BasicCard(props) {
  return (
    <Card
      sx={{
        width: 125,
        height: 110,
        borderRadius: "7%",
        textAlign: "center",
        background: "transparent",
        color: "white",
        fontFamily: "Rubik",
        p: 3,
      }}
    >
      <Typography sx={{ mt: ".3rem" }}> {props.weather} </Typography>
      <Typography sx={{ mt: ".5rem" }}> humidity: {props.humidity}</Typography>
      <Typography sx={{ mt: ".25rem" }}>{props.temperature} C</Typography>
    </Card>
  );
}
