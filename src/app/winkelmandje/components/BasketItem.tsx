import AddButton from "@/app/winkelmandje/components/buttons/AddButton";
import DeleteButton from "@/app/winkelmandje/components/buttons/DeleteButton";
import RemoveButton from "@/app/winkelmandje/components/buttons/RemoveButton";
import RowTemplate from "@/app/winkelmandje/components/RowTemplate";
import ImageBox from "@/components/carousel/ImageBox";
import PriceTag from "@/components/PriceTag";
import TextButton from "@/components/TextButton";
import Product from "@/database/models/Product";
import { Typography } from "@mui/material";

export default function BasketItem(props: { product: Product; count: number }) {
  return !props.product.prijs ? (
    <></>
  ) : (
    <RowTemplate
      image={<ImageBox alt={props.product.titel} src={props.product.afbeeldingen[0]} />}
      title={
        <TextButton
          variant="h5"
          text={`${props.product.titel}`}
          textTransform="none"
          href={`/product/${props.product._id}`}
          sx={{ p: 0 }}
        />
      }
      price={<PriceTag price={props.product.prijs} sx={{ width: 1 }} variant="h6" />}
      count={
        <>
          <RemoveButton product={props.product} />
          <Typography variant="h6">{props.count}</Typography>
          <AddButton product={props.product} />
          <DeleteButton product={props.product} />
        </>
      }
      total={<PriceTag price={props.count * props.product.prijs} sx={{ width: 1 }} variant="h6" />}
    />
  );
}
