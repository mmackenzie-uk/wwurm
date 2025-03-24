import LoadMore from "./ui/load";
import Carousel from "./ui-client/carousel";
import Products from "./ui/products";
import { IProduct } from "./persistence/cart";
import { findAll } from "./actions";

export default function Home() {
  const products = findAll() as Array<IProduct>;
  return (
    <>
      <Carousel />
      <Products products={products}/>
      <LoadMore />
    </>
  );
}
