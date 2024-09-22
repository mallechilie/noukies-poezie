import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import zIndex from "@mui/material/styles/zIndex";
import Typography from "@mui/material/Typography";

export default function Header(props: {
  title: string;
  sx?: SxProps;
  width: number;
  height: number;
}) {
  return (
    <Box
      sx={{
        ...props.sx,
        backgroundImage: `url(https://picsum.photos/${props.width}/${props.height})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "gray",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        width: props.width,
        height: props.height,
        maxWidth: 1,
        zIndex: 0
      }}
      style={{ filter: "grayscale(100%)" }}
    >
      <Typography variant="h1" sx={{ color: "white", width: 7 / 10 }} style={{ zIndex: 10 }}>
        {props.title}
      </Typography>
    </Box>
  );
}
