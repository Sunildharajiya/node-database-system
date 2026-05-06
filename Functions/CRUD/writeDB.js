import fs from "fs";
import { getCollectionPath } from "./config.js";
import { ensureCollection } from "./ensure.js";

/* -------------------- WRITE DATABASE -------------------- */

export function writeDB(collection, data) {

  // Ensure collection exists
  ensureCollection(collection);

  const filePath = getCollectionPath(collection);

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}