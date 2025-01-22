import PriceTag from "@/components/PriceTag";
import { Typography } from "@mui/material";
import RowTemplate from "./RowTemplate";

export default function Delivery(props: { delivery: number }) {
  return (
    <RowTemplate
      title={<Typography variant="h5">Verzending</Typography>}
      total={<PriceTag price={props.delivery} variant="h6" sx={{ width: 1 }} />}
    />
  );
}
