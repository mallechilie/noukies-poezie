import RemoveButton from "@/app/winkelmandje/content//buttons/RemoveButton";
import AddButton from "@/app/winkelmandje/content/buttons/AddButton";
import DeleteButton from "@/app/winkelmandje/content/buttons/DeleteButton";
import ImageBox from "@/components/carousel/ImageBox";
import PriceTag from "@/components/PriceTag";
import TextButton from "@/components/TextButton";
import GridContainer from "@/components/wrappers/GridContainer";
import Product from "@/database/models/Product";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function BasketItem(props: { product: Product; count: number }) {
  return !props.product.prijs ? (
    <></>
  ) : (
    <GridContainer sx={{ m: 1 }}>
      <Grid size={1.5}>
        <ImageBox alt={props.product.titel} src={props.product.afbeeldingen[0]} />
      </Grid>
      <Grid size={"grow"}>
        <TextButton variant="h5" text={`${props.product.titel}`} textTransform="none" />
      </Grid>
      <Grid size={2} sx={{ display: "flex", alignItems: "center" }}>
        <PriceTag price={props.product.prijs} sx={{ width: 1 }} variant="h6" />
      </Grid>
      <Grid size={2} sx={{ display: "flex", alignItems: "center" }}>
        <RemoveButton product={props.product} />
        <Typography variant="h6">{props.count}</Typography>
        <AddButton product={props.product} />
        <DeleteButton product={props.product} />
      </Grid>
      <Grid size={2} sx={{ display: "flex", alignItems: "center" }}>
        <PriceTag price={props.count * props.product.prijs} sx={{ width: 1 }} variant="h6" />
      </Grid>
    </GridContainer>
  );
}
