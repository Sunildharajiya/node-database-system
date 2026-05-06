// id genrator
import crypto from "crypto";


export function generateId() {
  return crypto.randomBytes(8).toString("hex");
}