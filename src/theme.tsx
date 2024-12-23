"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)"
  },
  palette: {
    primary: {
      main: "#dfb947",
      light: "#f6f6c8"
    },
    secondary: {
      main: "#e7eafa"
    }
  }
});

export default theme;
