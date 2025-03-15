import Basket from "@/app/winkelmandje/components/Basket";
import Header from "@/components/layout/Header";
import ContentWidth from "@/components/wrappers/ContentWidth";

export default function Page() {
  return (
    <>
      <Header height={400} width={1440} />
      <ContentWidth>
        <Basket />
      </ContentWidth>
    </>
  );
}
