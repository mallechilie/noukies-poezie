import * as React from "react";

import ContentWidth from "@/components/wrappers/ContentWidth";
import TitleButton from "@/components/TitleButton";
import Bar from "./wrappers/Bar";
import BasketButton from "@/components/basket/BasketButton";

export default function Navbar() {
  return (
    <Bar sx={{ mb: "1px" }}>
      <ContentWidth
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <TitleButton />
        <BasketButton />
      </ContentWidth>
    </Bar>
  );
}
