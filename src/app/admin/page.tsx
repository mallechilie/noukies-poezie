import Header from "@/components/layout/Header";
import ProductList from "@/components/ProductList";
import ContentWidth from "@/components/wrappers/ContentWidth";
import Globals from "@/globals";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import MuiMarkdown from "mui-markdown";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Header height={400} width={1440} />
      <ContentWidth>
        <MuiMarkdown>
          {`##### De website is nog in constructie, je kan me bereiken op <nouks_poezie@outlook.com>`}
        </MuiMarkdown>

        <Fab
          component={Link}
          href={`/admin/new`}
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
          <AddIcon />
        </Fab>
        <ProductList />
      </ContentWidth>
    </>
  );
}
