import { SingleProductComponent } from "./single";

export const FavoriteProductComponent = ({
  products = [],
  handleClearCart,
  handleRemoveFromCart,
}) => {
  

  return (
    <>
      <div className="flex justify-between py-4 px-3">
        <h3 className="text-lg font-bold">Your Favorite Cart</h3>
        <button className="bg-red-400 p-2" onClick={handleClearCart}>
          Empty cart
        </button>
      </div>
      <div className="flex">
        {products.map((product) => (
          <SingleProductComponent
            key={product.name}
            product={product}
            onRemoveFromCartClick={handleRemoveFromCart}
          />
        ))}
      </div>
    </>
  );
};
