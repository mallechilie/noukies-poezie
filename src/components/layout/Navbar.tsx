import BasketButton from "@/components/basket/BasketButton";
import TitleButton from "@/components/layout/TitleButton";
import Bar from "@/components/wrappers/Bar";
import ContentWidth from "@/components/wrappers/ContentWidth";

export default function Navbar() {
  return (
    <Bar sx={{ mb: "1px" }}>
      <ContentWidth
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TitleButton />
        <BasketButton />
      </ContentWidth>
    </Bar>
  );
}
