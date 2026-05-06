// Import crypto module for encryption
import crypto from "crypto";
import env from 'dotenv'
env.config()
/* -------------------- CONFIGURATION -------------------- */

// Encryption algorithm
const algorithm = "aes-256-cbc";
const secretKey = Buffer.from(process.env.SECRET_KEY, "hex");

// Validate key length
if (secretKey.length !== 32) {
  throw new Error("SECRET_KEY must be 32 bytes (64 hex characters)");
}

/* -------------------- ENCRYPT FUNCTION -------------------- */
 export function encrypt(text) {

  if (text === undefined || text === null) return text;

  // Generate random IV (16 bytes)
  const iv = crypto.randomBytes(16);

  // Create cipher
  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

  // Encrypt
  let encrypted = cipher.update(String(text), "utf8", "hex");
  encrypted += cipher.final("hex");

  // Return IV + encrypted data
  return iv.toString("hex") + ":" + encrypted;
}


/* -------------------- DECRYPTION FUNCTION -------------------- */

export function decrypt(text) {

  if (typeof text !== "string") return text;

  // Check structure
  if (!text.includes(":")) return text;

  try {

    const parts = text.split(":");

    const iv = Buffer.from(parts[0], "hex");
    const encryptedText = parts[1];

    // Create decipher
    const decipher = crypto.createDecipheriv(algorithm, secretKey, iv);

    let decrypted = decipher.update(encryptedText, "hex", "utf8");
    decrypted += decipher.final("utf8");

    return decrypted;

  } catch (error) {
    return text;
  }
}