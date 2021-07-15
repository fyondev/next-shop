import { SingleProductComponent } from "./single";
import { Checkout } from "./Checkout";
import { useState } from "react";

export const CartProductComponent = ({
  
  products = [],
  handleClearCart,
  handleRemoveFromCart,
}) => { const [isCheckout, setIsCheckout] = useState(false);
const handleCheckout = () => {
  setIsCheckout(true);
}
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
        <button className="bg-green-400 p-2" onClick={handleCheckout}>
          Checkout
        </button>

      </div> 
      {isCheckout && <Checkout/>}
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