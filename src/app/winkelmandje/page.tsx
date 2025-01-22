import Basket from "@/app/winkelmandje/content/Basket";
import Header from "@/components/layout/Header";
import ContentWidth from "@/components/wrappers/ContentWidth";

export default function Page() {
  console.log("render page");
  return (
    <>
      <Header height={400} width={1440} />
      <ContentWidth>
        <Basket />
      </ContentWidth>
    </>
  );
}
