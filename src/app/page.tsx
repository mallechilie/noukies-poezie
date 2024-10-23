import Header from "@/components/Header";
import PoezieList from "@/components/dbTesters/PoezieList";
import ContentWidth from "@/components/wrappers/ContentWidth";

export default function Page() {
  return (
    <>
      <Header title="Nouks Poëzie" height={400} width={1440} />
      <ContentWidth>
        <PoezieList/>
      </ContentWidth>
    </>
  );
}
