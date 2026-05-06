import fs from "fs";
import { getCollectionPath } from "./config.js";
import { ensureCollection } from "./ensure.js";

/* -------------------- READ DATABASE -------------------- */

export function readDB(collection) {

  // Ensure collection exists
  ensureCollection(collection);

  const filePath = getCollectionPath(collection);

  const data = fs.readFileSync(filePath, "utf8");

  return data ? JSON.parse(data) : [];
}