import * as React from "react";

import AppBar from "@mui/material/AppBar";

import ContentWidth from "@/components/wrappers/ContentWidth";
import TitleButton from "@/components/TitleButton";

export default function Navbar() {
  return (
    <AppBar sx={{ height: "80px", mb: "1px" }} position="static">
      <ContentWidth
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <TitleButton />
      </ContentWidth>
    </AppBar>
  );
}
