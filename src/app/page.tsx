import Header from "@/components/Header";
import DatabaseInfo from "@/components/dbTesters/DatabaseInfo";
import ProductList from "@/components/dbTesters/ProductList";
import ContentWidth from "@/components/wrappers/ContentWidth";

export default function Page() {
  return (
    <>
      <Header title="Nouks Poëzie" height={400} width={1440} />
      <ContentWidth>
        <DatabaseInfo />
        <ProductList />
      </ContentWidth>
    </>
  );
}
