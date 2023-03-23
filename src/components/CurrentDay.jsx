import * as React from "react";
import FlexBetween from "./FlexBetween";
import Stack from "@mui/material/Stack";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

export default function CurrentWeather(props) {
  // let currentWeather = "Cloudy";
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px");
  // let UVindex = 95;
  // let humidity = 70;
  // let airIndex = 75;
  // let location = "Coimbatore, TamilNadu";

  return (
    <Box>
      {isNonMobileScreens ? (
        <FlexBetween
          sx={{
            m: "2% 30%",
            display: "flex",
            justifyContent: "center",
            minWidth: "3rem",
            borderRadius: "1rem",
            fontFamily: "Rubik",
            p: 3,
            justifyContent: "center",
            background: "transparent",
            color: "white",
          }}
          boxShadow={3}
        >
          <Typography style={{ fontSize: "1.75rem", marginTop: "6rem" }}>
            {props.weather}
            <Typography style={{ fontSize: "1.25rem", marginTop: "1rem" }}>
              feels like : {props.feels_like} C
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              divider={<divider orientation="vertical" flexItem />}
              padding=".4rem"
            >
              <Typography style={{ fontSize: "1.25rem" }}>
                humidity: {props.humidity}
              </Typography>
              <Typography style={{ fontSize: "1.25rem" }}>
                Location: {props.name}
              </Typography>
            </Stack>
          </Typography>
        </FlexBetween>
      ) : (
        <FlexBetween
          sx={{
            m: "15% 7%",
            textAign: "center",
            minWidth: "10rem",
            borderRadius: "1rem",
            fontFamily: "Rubik",
            justifyContent: "center",
            p: 3,
            color: "white",
          }}
          boxShadow={3}
        >
          <Typography sx={{ fontSize: "144%", mt: "6rem" }}>
            {props.weather}
            <Typography sx={{ fontSize: "75%", mt: "1rem" }}>
              feels_like: {props.feels_like}
            </Typography>
            <Typography sx={{ fontSize: "75%", mt: ".3rem" }}>
              Humidity: {props.humidity}
            </Typography>
            <Typography sx={{ fontSize: "75%", mt: ".3rem" }}>
              Location: {props.name}
            </Typography>
          </Typography>
        </FlexBetween>
      )}
    </Box>
  );
}
