import Dexie from "dexie";

const db = new Dexie("nextShop");
db.version(1).stores({
  cartItems: `name, price, description, image, count`,
});

db.version(2).stores({
  favoriteItems: `name, price, description, image, count`,
});

export default db;
