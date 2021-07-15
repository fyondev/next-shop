import { Fragment } from "react";
import { products } from "../data/products";
export const Order = () => {
  return (
    <div>
      {products.map((product) => (
        <Fragment key={product.id}>
          <h1>{product.name}</h1>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </Fragment>
      ))}
    </div>
  );
};
export default Order;