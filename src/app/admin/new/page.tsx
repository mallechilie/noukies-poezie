"use client";
import AddToBasketButton from "@/components/basket/AddToBasketButton";
import ImageCarousel from "@/components/carousel/ImageCarousel";
import PriceTag from "@/components/PriceTag";
import ContentWidth from "@/components/wrappers/ContentWidth";
import GridContainer from "@/components/wrappers/GridContainer";
import Globals from "@/globals";
import { updateProduct } from "@/lib/features/newProduct/newProductSlice";
import PreviewIcon from "@mui/icons-material/Preview";
import { Box, Fab, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import { useDispatch } from "react-redux";
import PriceInput from "./PriceInput";
import { useAppSelector } from "@/lib/hooks";

export default function Page() {
  const dispatch = useDispatch();
  const { product } = useAppSelector((state) => state.newProduct);

  const [preview, setPreview] = useState(false);

  return (
    <ContentWidth>
      <GridContainer sx={{ mt: 3 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          {preview ? <ImageCarousel product={product} /> : <></>}
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex", flexDirection: "column" }}>
          {preview ? (
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
          ) : (
            <>
              <TextField
                id="title"
                label="Titel"
                variant="standard"
                sx={{
                  ...Globals.theme.typography.h2,
                  "& .MuiInputBase-root": {
                    ...Globals.theme.typography.h2,
                  },
                }}
                value={product.titel}
                onChange={(e) => dispatch(updateProduct({ titel: e.target.value }))}
              />
              <TextField
                id="omschrijving"
                label="Omschrijving"
                multiline
                rows={6}
                variant="standard"
                value={product.omschrijving}
                onChange={(e) => dispatch(updateProduct({ omschrijving: e.target.value }))}
              />
              <PriceInput
                value={product.prijs.toString()}
                onChange={(e) => dispatch(updateProduct({ prijs: parseFloat(e.target.value) }))}
              />
            </>
          )}
        </Grid>
      </GridContainer>
      <Fab
        variant="extended"
        onClick={() => setPreview(!preview)}
        sx={{
          position: "fixed",
          bottom: "3rem",
          right: "3rem",
          backgroundColor: Globals.theme.palette.secondary.main,
          ":hover": {
            backgroundColor: Globals.theme.palette.primary.main,
          },
        }}
      >
        <PreviewIcon sx={{ mr: 1 }} />
        Preview
      </Fab>
    </ContentWidth>
  );
}
