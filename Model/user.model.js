import { Model } from "./model.js";
import { Schema } from "../Functions/schema/schema-core.js";

const userSchema = new Schema({
  id: { type: "id", auto: true },
  name: { type: "string", required: true },
  email: { type: "email", required: true, unique: true },
  password: { type: "password", required: true }
});

export const User = new Model("users", userSchema);