"use client";
import BasketItem from "@/app/winkelmandje/content/BasketItem";
import Delivery from "@/app/winkelmandje/content/Delivery";
import Total from "@/app/winkelmandje/content/Total";
import { useAppSelector } from "@/lib/hooks";

export default function Basket() {
  const basket = useAppSelector((state) => state.basket);

  return (
    <>
      {basket.products.map(({ product, count }) => (
        <BasketItem product={product} count={count} key={product._id?.toString()} />
      ))}
      <Delivery delivery={5} />
      <Total
        total={basket.products.reduce(
          (sum, item) => sum + item.count * (item.product.prijs ?? 0),
          5
        )}
      />
    </>
  );
}
