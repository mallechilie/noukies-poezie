import Header from "@/components/Header";
import ProductList from "@/components/dbTesters/ProductList";
import ContentWidth from "@/components/wrappers/ContentWidth";
import { getDbInfo } from "@/database/api/getDbInfo";
import MuiMarkdown from "mui-markdown";
import { use } from "react";

export default function Page() {
  use(getDbInfo());
  return (
    <>
      <Header title="Nouks Poëzie" height={400} width={1440} />
      <ContentWidth>
        <MuiMarkdown>
          {`##### De website is nog in constructie, je kan me bereiken op <nouks_poezie@outlook.com>`}
        </MuiMarkdown>
        <ProductList />
      </ContentWidth>
    </>
  );
}
