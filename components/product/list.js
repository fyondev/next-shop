import { SingleProductComponent } from "./single";

export const ListProductComponent = ({ products = [], handleAddToCartClick }) => {
  return (
    <div className="flex">
      {products.map((product) => (
        <SingleProductComponent
          key={product.name}
          product={product}
          onAddToCartClick={handleAddToCartClick}
        />
      ))}
    </div>
  );
};
