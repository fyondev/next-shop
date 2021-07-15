import Dexie from "dexie";

const db = new Dexie("nextShop");
db.version(1).stores({
  cartItems: `name, price, description, image, count`,
});


//adding to open DB on import + error message for DB
db.open().catch((err)=>{
  console.error('Database could not be opened: '+ (err.stack || err));
})

export default db;
