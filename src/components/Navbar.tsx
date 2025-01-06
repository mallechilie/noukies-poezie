import * as React from "react";

import ContentWidth from "@/components/wrappers/ContentWidth";
import TitleButton from "@/components/TitleButton";
import Bar from "./wrappers/Bar";

export default function Navbar() {
  return (
    <Bar sx={{mb: "1px"}}>
      <ContentWidth
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <TitleButton />
      </ContentWidth>
    </Bar>
  );
}
