"use client";
import BasketItem from "@/app/winkelmandje/components/BasketItem";
import Delivery from "@/app/winkelmandje/components/Delivery";
import Total from "@/app/winkelmandje/components/Total";
import { useAppSelector } from "@/lib/hooks";

export default function Basket() {
  const basket = useAppSelector((state) => state.basket);

  return (
    <>
      {basket.products.map(({ product, count }) => (
        <BasketItem product={product} count={count} key={product._id?.toString()} />
      ))}
      <Delivery delivery={6.95} />
      <Total
        total={basket.products.reduce(
          (sum, item) => sum + item.count * (item.product.prijs ?? 0),
          6.95
        )}
      />
    </>
  );
}
