import Link from 'next/link';
import React from 'react'
import { FavoriteProductComponent } from '../components/product/favorite';

import { useFavoriteCart } from '../hooks/favorites';

function Favorites() {

    const {
        favoriteItems,
        handleClearCart,
        handleRemoveFromFavorite,
      } = useFavoriteCart();

      

    return (
        <div>
            <FavoriteProductComponent
              products={favoriteItems}
              handleClearCart={handleClearCart}
              handleRemoveFromCart={handleRemoveFromFavorite}
            />
            <Link  href="/">
          <a className="px-3 py-2 my-3 bg-indigo-200 text-gray-800">go to list</a>
      </Link>
        </div>
    )
}

export default Favorites;
