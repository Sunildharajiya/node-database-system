import fs from "fs";
import { getCollectionPath, DB_DIR } from "./config.js";

export function ensureCollection(name) {

  // Ensure DB folder
  if (!fs.existsSync(DB_DIR)) {
    fs.mkdirSync(DB_DIR, { recursive: true });
  }

  const filePath = getCollectionPath(name);

  // Ensure collection file
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
  }
}