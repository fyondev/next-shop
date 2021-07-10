import Dexie from "dexie";

const db = new Dexie("nextShop");
db.version(1).stores({
  cartItems: `name, price, description, image, count`,
});

export default db;
