import Navbar from "./components/navbar";
import { SearchBox } from "./components/searchBox";
import { useMediaQuery } from "@mui/material";
import * as React from "react";

export default function App() {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px");

  isNonMobileScreens
    ? (document.body.style.backgroundSize = "1920px 1080px")
    : (document.body.style.backgroundSize = "contain");
  document.body.style.backgroundRepeat = "";

  document.body.style.backgroundImage =
    "linear-gradient(to right bottom, #0280ed, #65aff0";

  return (
    <div className="App">
      <div
        style={{
          textAlign: "center",
          background: "linear-gradient(to right bottom, #0280ed, #65aff0",
        }}
      >
        <SearchBox />
        <Navbar />
      </div>
    </div>
  );
}
