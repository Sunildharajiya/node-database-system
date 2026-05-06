import { readDB } from "./readDB.js";
import { writeDB } from "./writeDB.js";
import { validate } from "../schema/validate.js";
import { generateId } from "../utilities/ID.js";

/* -------------------- CREATE -------------------- */

export async function create(collection, schema, data) {

  // 1. Read collection data
  const db = readDB(collection);

  // 2. Generate unique ID
  let id;
  do {
    id = generateId();
  } while (db.some(item => item.id === id));

  data.id = id;

  // 3. Validate + transform (schema handles hashing etc.)
  const validData = await validate(schema, data, db);

  // 4. Insert
  db.push(validData);

  // 5. Save
  writeDB(collection, db);

  return validData;
}