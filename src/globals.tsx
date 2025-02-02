import { createTheme } from "@mui/material";

export default abstract class Globals {
  public static readonly theme = createTheme({
    palette: {
      primary: {
        main: "#dfb947",
        light: "#f6f6c8",
      },
      secondary: {
        main: "#6e88e5",
        light: "#e7eafa",
      },
    },
  });
}
