import Head from "next/head";
import { ListProductComponent } from "../components/product/list";
import { products } from "../data/products";
import { CartProductComponent } from "../components/product/cart";
import { useCart } from "../hooks/cart";

export default function Home() {
  const {
    cartItems,
    handleClearCart,
    handleAddToCartClick,
    handleRemoveFromCart,
  } = useCart();

  return (
    <div>
      <Head>
        <title>Next Shop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto">
        <h1 className="font-bold text-xl p-3">Next Shop</h1>
        <ListProductComponent
          products={products}
          handleAddToCartClick={handleAddToCartClick}
        />

        {cartItems.length > 0 && (
          <div>
            <CartProductComponent
              products={cartItems}
              handleClearCart={handleClearCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          </div>
        )}
      </div>
    </div>
  );
}
