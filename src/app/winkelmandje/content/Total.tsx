import PriceTag from "@/components/PriceTag";
import GridContainer from "@/components/wrappers/GridContainer";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function Total(props: { total: number }) {
  return (
    <GridContainer sx={{ m: 1 }}>
      <Grid size={{ md: 1.5 }}></Grid>
      <Grid size={{ md: "grow" }}>
        <Typography variant="h5">Totaal</Typography>
      </Grid>
      <Grid size={{ md: 2 }} sx={{ display: "flex", alignItems: "center" }}>
        <PriceTag price={props.total} variant="h6" sx={{ width: 1 }} />
      </Grid>
    </GridContainer>
  );
}
