import Dexie, { DBCoreRangeType } from "dexie";

const db = new Dexie("nextShop");
db.version(1).stores({
  cartItems: `name, price, description, image, count`,
});
db.version(2).stores({
  cartItems: `name, price, description, image, count`,
  products: `name, price, description, image, flag`,
});
db.version(3).stores({
  cartItems: `name, price, description, image, count`,
  products: `name, price, description, image, flag`
})

//adding to open DB on import + error message for DB
db.open().catch((err)=>{
  console.error('Database could not be opened: '+ (err.stack || err));
})

export default db;
