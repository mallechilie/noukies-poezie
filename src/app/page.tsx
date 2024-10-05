import Header from "@/components/Header";
import TestDbConnection from "@/components/TestDbConnection";
import ContentWidth from "@/components/wrappers/ContentWidth";

export default function Home() {
  return (
    <>
      <Header title="Noukies Poëzie" height={400} width={1440} />
      <ContentWidth>
        <TestDbConnection />
      </ContentWidth>
    </>
  );
}
