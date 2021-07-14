import { SingleProductComponent } from "./single";

export const ListProductComponent = ({ products = [], handleAddToCartClick, handleAddFavoriteCart}) => {
  return (
    <div className="flex">
      {products.map((product) => (
        <SingleProductComponent
          key={product.name}
          product={product}
          onAddToCartClick={handleAddToCartClick}
          onAddToFavorite={handleAddFavoriteCart}

          
        />
      ))}
    </div>
  );
};
