import GridContainer from "@/components/wrappers/GridContainer";
import Grid from "@mui/material/Grid2";

export default function RowTemplate(props: {
  image?: React.ReactNode;
  title: React.ReactNode;
  price?: React.ReactNode;
  count?: React.ReactNode;
  total: React.ReactNode;
}) {
  return (
    <GridContainer sx={{ m: 1 }}>
      <Grid size={1.5}>{props.image}</Grid>
      <Grid size={4.5}>{props.title}</Grid>
      <Grid size={2} sx={{ display: "flex", alignItems: "center" }}>
        {props.price}
      </Grid>
      <Grid size={2} sx={{ display: "flex", alignItems: "center" }}>
        {props.count}
      </Grid>
      <Grid size={2} sx={{ display: "flex", alignItems: "center" }}>
        {props.total}
      </Grid>
    </GridContainer>
  );
}
