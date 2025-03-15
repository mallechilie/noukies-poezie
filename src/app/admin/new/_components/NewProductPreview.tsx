import AddToBasketButton from "@/components/basket/AddToBasketButton";
import PriceTag from "@/components/PriceTag";
import { useAppSelector } from "@/lib/hooks";
import { Box, Typography } from "@mui/material";

export default function NewProductPreview() {
  const { product } = useAppSelector((state) => state.newProduct);

  return (
    <>
      <Typography variant="h2">{product.titel}</Typography>
      <Typography variant="body1">{product.omschrijving}</Typography>
      {product.prijs && (
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <PriceTag price={product.prijs} />
          <AddToBasketButton product={product} />
          <Box />
        </Box>
      )}
    </>
  );
}
