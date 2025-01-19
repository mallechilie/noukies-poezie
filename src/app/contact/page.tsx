import Header from "@/components/layout/Header";
import ContentWidth from "@/components/wrappers/ContentWidth";
import getPageByName from "@/database/api/page/getPageByName";
import MyPage from "@/database/models/MyPage";
import { CircularProgress } from "@mui/material";
import MuiMarkdown from "mui-markdown";

export default async function Page() {
  const page: MyPage | undefined = await getPageByName("Contact");

  return (
    <>
      <Header height={400} width={1440} />
      <ContentWidth>
        {!page ? <CircularProgress sx={{ m: 3 }} /> : <MuiMarkdown>{page.inhoud}</MuiMarkdown>}
      </ContentWidth>
    </>
  );
}
