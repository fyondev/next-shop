import { SingleProductComponent } from "./single";
import React, { useState } from "react";
export const ListProductComponent = ({
  products = [],
  handleAddToCartClick,
}) => {
  const [sortProduct, setSortProduct] = useState(false);
  const sortByPrice = () => {
    setSortProduct(!sortProduct);
  };
  const compare = (a, b) => {
    return a.price - b.price;
  };
  const sortedProductByPrice = () => {
    return products.sort(compare);
  };
  console.log(products);
  return (
    <>
      <button
        className="px-3 py-2 bg-indigo-200 text-gray-800"
        onClick={sortByPrice}
      >
        Sort By
      </button>
      <div className="flex">
        {!!sortProduct
          ? sortedProductByPrice().map((product) => (
              <SingleProductComponent
                key={product.name}
                product={product}
                onAddToCartClick={handleAddToCartClick}
              />
            ))
          : products.map((product) => (
              <SingleProductComponent
                key={product.name}
                product={product}
                onAddToCartClick={handleAddToCartClick}
              />
            ))}
      </div>
    </>
  );
};
