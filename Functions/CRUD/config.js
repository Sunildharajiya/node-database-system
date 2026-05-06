import path from "path";

export const DB_DIR = path.join(process.cwd(), "Clusters");

export function getCollectionPath(name) {
  return path.join(DB_DIR, `${name}.json`);
}