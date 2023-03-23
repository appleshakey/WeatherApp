import React from "react";
import Typography from "@mui/material/Typography";
import { Box, useMediaQuery } from "@mui/material";

export default function Navbar() {
  const isNonMobileQuery = useMediaQuery("(min-width: 1000px");
  return (
    <Box>
      {isNonMobileQuery ? (
        <Box
          position="fixed"
          right="0"
          top="0"
          width="100%"
          zindex="10"
          minWidth="1000px"
          maxWidth="10000px"
          background="transparent"
        >
          <Box
            sx={{
              background: "transparent",
            }}
          >
            <Typography
              fontWeight="bold"
              fontSize="clamp(1rem, 2rem, 2.25rem)"
              color="white"
            >
              Weatherapp
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box
          position="fixed"
          right="0"
          top="0"
          zIndex="10"
          width="100%"
          maxWidth="1000px"
          minWidth="100px"
          background="transparent"
        >
          <Box
            padding=".5rem 4%"
            sx={{
              background: "transparent",
            }}
          >
            <Typography
              fontWeight="bold"
              fontSize="clamp(1rem, 2rem, 2.25rem)"
              color="white"
            >
              Weatherapp
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
}
