import Link from 'next/link';
import React from 'react'
import { CartProductComponent } from '../components/product/cart';
import { useFavoriteCart } from '../hooks/favorites';

function Favorites() {

    const {
        favoriteItems,
        handleClearCart,
        handleRemoveFromFavorite,
      } = useFavoriteCart();

      console.log(window.location.href);

    return (
        <div>
            <CartProductComponent
              products={favoriteItems}
              handleClearCart={handleClearCart}
              handleRemoveFromCart={handleRemoveFromFavorite}
            />
            <Link  href="/">
          <a>go to list</a>
      </Link>
        </div>
    )
}

export default Favorites;
