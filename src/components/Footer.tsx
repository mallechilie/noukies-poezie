"use client";
import * as React from "react";

import { Box, Divider, SxProps, Theme, useTheme } from "@mui/material";
import Button from "@mui/material/Button";

import TitleButton from "@/components/TitleButton";
import ContentWidth from "@/components/wrappers/ContentWidth";
import GridContainer from "@/components/wrappers/GridContainer";
import GridItem from "@/components/wrappers/GridItem";

const pages = ["Algemene voorwaarden", "Privacy statement"];

export default function Footer(props: { sx?: SxProps<Theme> }) {
  const theme = useTheme();
  return (
    <Box sx={{ ...props.sx, backgroundColor: theme.palette.primary.main }}>
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
              sx={{ bgcolor: theme.palette.primary.contrastText }}
            />

            <div>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{
                    textTransform: "none",
                    color: theme.palette.primary.contrastText,
                    textAlign: "left",
                    justifyContent: "flex-start",
                    overflow: "hidden",
                    width: 1
                  }}
                >
                  {page}
                </Button>
              ))}
            </div>
          </GridItem>
        </GridContainer>
      </ContentWidth>
    </Box>
  );
}
