"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)"
  },
  palette: {
    primary: {
      main: "#dfb947",
      light: "#e4df58",
      dark: "#d2802e"
    }
  }
});

export default theme;
