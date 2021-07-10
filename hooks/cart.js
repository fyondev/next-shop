import { useState, useEffect } from "react";
import db from "../data/database";

const getItemsFromDb = () => db.cartItems.toArray();
const addItemToDb = (item) => db.cartItems.put(item);
const updateItemInDb = (item, count) => {
  db.cartItems.where("name").equalsIgnoreCase(item.name).modify({ count });
};
const removeItemFromDb = (item) => {
  db.cartItems.where("name").equalsIgnoreCase(item.name).delete();
};
const clearItemsFromDb = () => db.cartItems.clear();

export const useCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getItemsFromDb().then((itemsFromDb) => setCartItems(itemsFromDb));
  }, []);

  const handleAddToCartClick = (product) => {
    const existingItemFromCart = cartItems.find(
      (item) => item.name === product.name
    );
    let newCartItems = [];

    if (existingItemFromCart) {
      updateItemInDb(product, existingItemFromCart.count + 1);
      newCartItems = cartItems.map((item) => {
        if (item.name === product.name) item.count += 1;

        return item;
      });
    } else {
      newCartItems = [...cartItems, { ...product, count: 1 }];
      addItemToDb({ ...product, count: 1 });
    }

    setCartItems(newCartItems);
  };

  const handleRemoveFromCart = (product) => {
    const existingItemFromCart = cartItems.find(
      (item) => item.name === product.name
    );
    let newCartItems = [];

    if (existingItemFromCart.count === 1) {
      newCartItems = cartItems.filter((item) => item.name !== product.name);
      removeItemFromDb(product);
    } else {
      updateItemInDb(product, existingItemFromCart.count - 1);
      newCartItems = cartItems.map((item) => {
        if (item.name === product.name) item.count -= 1;

        return item;
      });
    }

    setCartItems(newCartItems);
  };

  const handleClearCart = () => {
    setCartItems([]);
    clearItemsFromDb();
  };

  return {
    cartItems,
    handleClearCart,
    handleAddToCartClick,
    handleRemoveFromCart,
  };
};
