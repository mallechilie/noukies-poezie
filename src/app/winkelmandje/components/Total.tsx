import PriceTag from "@/components/PriceTag";
import { Typography } from "@mui/material";
import RowTemplate from "@/app/winkelmandje/components/RowTemplate";

export default function Total(props: { total: number }) {
  return (
    <RowTemplate
      title={<Typography variant="h5">Totaal</Typography>}
      total={<PriceTag price={props.total} variant="h6" sx={{ width: 1 }} />}
    />
  );
}
