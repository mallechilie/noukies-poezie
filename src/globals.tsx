import { createTheme } from "@mui/material";

export default abstract class Globals {
  public static readonly theme = createTheme({
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
}
