import * as React from "react";

import { Divider } from "@mui/material";
import Button from "@mui/material/Button";

import TitleButton from "@/components/TitleButton";
import ContentWidth from "@/components/wrappers/ContentWidth";
import GridContainer from "@/components/wrappers/GridContainer";
import GridItem from "@/components/wrappers/GridItem";
import Globals from "@/globals";
import Bar from "@/components/wrappers/Bar";

const pages = ["Contact"];

export default function Footer() {
  return (
    <Bar>
      <ContentWidth>
        <GridContainer>
          <GridItem>
            <TitleButton />
          </GridItem>

          <GridItem sx={{ display: "flex" }}>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ bgcolor: Globals.theme.palette.primary.contrastText }}
            />

            <div>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{
                    textTransform: "none",
                    color: Globals.theme.palette.primary.contrastText,
                    textAlign: "left",
                    justifyContent: "flex-start",
                    overflow: "hidden",
                    width: 1
                  }}
                  href={`\${page.toLowerCase()}`}
                >
                  {page}
                </Button>
              ))}
            </div>
          </GridItem>
        </GridContainer>
      </ContentWidth>
    </Bar>
  );
}
