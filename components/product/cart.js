import { SingleProductComponent } from "./single";

export const CartProductComponent = ({
  products = [],
  handleClearCart,
  handleRemoveFromCart,
}) => {
  let cartTotal = 0;
  products.forEach((product) => {
    cartTotal += product.count * product.price;
  });

  return (
    <>
      <div className="flex justify-between py-4 px-3">
        <h3 className="text-lg font-bold">Your cart (€{cartTotal})</h3>
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
