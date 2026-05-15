// importimg crud functions
import { create } from "../Functions/CRUD/create.js";
import { update } from "../Functions/CRUD/update.js";
import { remove } from "../Functions/CRUD/delete.js";
import { readDB } from "../Functions/CRUD/readDB.js";

//model layer
export class Model {
  constructor(collection, schema) {
    this.collection = collection;
    this.schema = schema;
  }

  async create(data) {
    return await create(this.collection, this.schema, data);
  }

  find() {
    return readDB(this.collection);
  }
  
  findById(id) {
  const data = readDB(this.collection);
  return data.find(item => item.id === id) || null;
 }

  async update(id, data) {
    return update(this.collection, id, data, this.schema);
  }

  delete(id) {
    return remove(this.collection, id);
  }
}
