import Image from "next/image";
export const SingleProductComponent = ({
  product = {},
  onAddToCartClick,
  onRemoveFromCartClick,
}) => {
  return (
    <div className="p-4 shadow rounded-sm mx-3">
      <Image
        width={300}
        height={300}
        src={product.image}
        alt="Picture of the author"
      />
      <h3>{product.name}</h3>
      <h5>
        {product.count ? `${product.count} x ` : ""}
        {product.price}€
      </h5>
      <p>{product.description}</p>
      {!!onAddToCartClick && (
        <button
          className="px-3 py-2 bg-indigo-200 text-gray-800"
          onClick={(e) => {
            e.preventDefault();
            onAddToCartClick(product);
          }}
        >
          Add to cart
        </button>
      )}
      {!!onRemoveFromCartClick && (
        <button
          className="px-3 py-2 bg-indigo-200 text-gray-800"
          onClick={(e) => {
            e.preventDefault();
            onRemoveFromCartClick(product);
          }}
        >
          Remove from cart
        </button>
      )}
    </div>
  );
};
