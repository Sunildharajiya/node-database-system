import { readDB } from "./readDB.js";
import { writeDB } from "./writeDB.js";

export function remove(collection, id) {

  if (!id) {
    throw new Error("ID is required");
  }

  const db = readDB(collection);

  // Find the item BEFORE deleting
  const deleted = db.find(item => item.id === id);

  if (!deleted) return null;

  // Remove it
  const newDB = db.filter(item => item.id !== id);

  // Save updated DB
  writeDB(collection, newDB);

  return deleted;
}