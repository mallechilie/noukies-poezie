import getComponentByName from "@/database/api/getComponentByName";
import ComponentData from "@/database/models/Component";
import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default  async function Header(props: {
  sx?: SxProps;
  width: number;
  height: number;
}) {
  const headerData: ComponentData = await getComponentByName("header");
  return (
    <Box
      sx={{
        ...props.sx,
        backgroundImage: `url(${headerData.img_link})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "gray",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        width: 1,
        height: props.height,
        maxWidth: props.width
      }}
      style={{ filter: "grayscale(100%)" }}
    >
      <Typography variant="h1" sx={{ color: "white", width: 7 / 10 }}>
        {headerData.title}
      </Typography>
    </Box>
  );
}
