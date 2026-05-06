import { readDB } from "./readDB.js";
import { writeDB } from "./writeDB.js";

/* -------------------- UPDATE -------------------- */

export const update = (collection, id, newData) => {

  if (!id) {
    throw new Error("ID is required");
  }

  // 1. Read collection
  const db = readDB(collection);

  // 2. Find index
  const index = db.findIndex(item => item.id === id);

  if (index === -1) return null;

  // 3. Update fields (merge)
  db[index] = {
    ...db[index],
    ...newData
  };

  // 4. Save
  writeDB(collection, db);

  // 5. Return updated item
  return db[index];
};