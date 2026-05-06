import { types } from "./schema-core.js";
import { generateId } from "../utilities/ID.js";
import { hashPass } from "../Encryption/bcryption.js";

export async function validate(schema, data, collectionData, options = {}) {
  const def = schema.definition;

  for (let key in def) {
    const rules = def[key];
    let value = data[key];

    // 🔹 Auto ID (only if not provided)
    if (rules.auto && rules.type === "id" && !value) {
      let id;
      do {
        id = generateId();
      } while (collectionData.some(item => item.id === id));

      data[key] = id;
      value = id;
    }

    // 🔹 Required
    if (rules.required && value === undefined) {
      throw new Error(`${key} is required`);
    }

    if (value !== undefined) {

      // 🔹 Type exists check
      if (!types[rules.type]) {
        throw new Error(`Unknown type: ${rules.type}`);
      }

      // 🔹 Type validation
      if (!types[rules.type](value)) {
        throw new Error(`${key} invalid (${rules.type})`);
      }

      // 🔹 Unique check (ignore self in update)
      if (rules.unique) {
        const exists = collectionData.some(
          item => item[key] === value && item.id !== options.currentId
        );

        if (exists) {
          throw new Error(`${key} must be unique`);
        }
      }

      // 🔹 Password hashing
      if (rules.type === "password") {
        data[key] = await hashPass(value);
      }
    }
  }

  return data;
}