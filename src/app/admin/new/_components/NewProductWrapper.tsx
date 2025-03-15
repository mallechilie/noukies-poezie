"use client";
import NewProductForm from "@/app/admin/new/_components/NewProductForm";
import NewProductPreview from "@/app/admin/new/_components/NewProductPreview";
import ContentWidth from "@/components/wrappers/ContentWidth";
import VerzendType from "@/database/models/ProductType";
import Globals from "@/globals";
import PreviewIcon from "@mui/icons-material/Preview";
import { Fab } from "@mui/material";
import { useState } from "react";

export default function NewProductWrapper(props: { productTypes: VerzendType[] }) {
  const [preview, setPreview] = useState(false);

  return (
    <ContentWidth>
      {preview ? <NewProductPreview /> : <NewProductForm productTypes={props.productTypes} />}
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
