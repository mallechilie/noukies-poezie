import Header from "@/components/layout/Header";
import ProductList from "@/components/ProductList";
import ContentWidth from "@/components/wrappers/ContentWidth";
import { getDbInfo } from "@/database/api/debug/getDbInfo";
import MuiMarkdown from "mui-markdown";
import { use } from "react";

export default function Page() {
  use(getDbInfo());
  return (
    <>
      <Header height={400} width={1440} />
      <ContentWidth>
        <MuiMarkdown>
          {`##### De website is nog in constructie, je kan me bereiken op <nouks_poezie@outlook.com>`}
        </MuiMarkdown>
        <ProductList />
      </ContentWidth>
    </>
  );
}
