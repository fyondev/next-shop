import { useState, useEffect } from "react";
import db from "../data/database";

const getItemsFromDb = () => db.favoriteItems.toArray();
const addItemToDb = (item) => db.favoriteItems.put(item);
const updateItemInDb = (item, count) => {
  db.favoriteItems.where("name").equalsIgnoreCase(item.name).modify({ count });
};
const removeItemFromDb = (item) => {
  db.favoriteItems.where("name").equalsIgnoreCase(item.name).delete();
};
const clearItemsFromDb = () => db.favoriteItems.clear();

export const useFavoriteCart = () => {
  const [favoriteItems, setfavoriteItems] = useState([]);

  useEffect(() => {
    getItemsFromDb().then((itemsFromDb) => setfavoriteItems(itemsFromDb));
  }, []);

  const handleAddFavoriteCart = (product) => {
    const existingItemFromCart = favoriteItems.find(
      (item) => item.name === product.name
    );
    let newfavoriteItems = [];

    if (existingItemFromCart) {
        removeItemFromDb(product)
      }else {
      newfavoriteItems = [...favoriteItems, { ...product, count: 1 }];
      addItemToDb({ ...product, count: 1 });
    }

    setfavoriteItems(newfavoriteItems);
  };  
    const handleRemoveFromFavorite = (product) => {
    const existingItemFromCart = favoriteItems.find(
      (item) => item.name === product.name
    );
    let newfavoriteItems = [];

    if (existingItemFromCart) {
      newfavoriteItems = favoriteItems.filter((item) => item.name !== product.name);
      removeItemFromDb(product);
    } 
        setfavoriteItems(newfavoriteItems);
  };

  const handleClearCart = () => {
    setfavoriteItems([]);
    clearItemsFromDb();
  };

  return {
    favoriteItems,
    handleClearCart,
    handleAddFavoriteCart,
    handleRemoveFromFavorite,
  };
};
