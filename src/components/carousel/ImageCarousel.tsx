"use client";
import Product from "@/database/models/Product";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import ImageBox from "@/components/carousel/ImageBox";
import Globals from "@/globals";

export default function ImageCarousel(props: { product: Product }) {
  const images = props.product.afbeeldingen;

  const [index, setIndex] = useState(0);
  function getAfbeelding() {
    return images[index];
  }

  return (
    <>
      <ImageBox alt={props.product.titel} src={getAfbeelding()} />
      {images.length > 1 && (
        <Grid container spacing={3} sx={{ my: 2 }}>
          {images.map((image, i) => (
            <Grid size={3} key={i}>
              <ImageBox
                alt={props.product.titel}
                src={image}
                onClick={() => setIndex(i)}
                color={
                  i == index
                    ? Globals.theme.palette.primary.light
                    : Globals.theme.palette.secondary.light
                }
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}
