

## 📁 Folder Structure
```
CRUD/
   ├── config.js 
   ├── create-state.js 
   ├── delete.js 
   ├── ensure.js 
   ├── readDB.js 
   ├── update.js 
   ├── writeDB.js 
   
```
   
   ---

## 🔧 Core Files Explanation

### `config.js`
- Stores database configuration
- Defines base directory and collection file paths

---

### `ensure.js`
- Ensures that:
  - Database folder exists
  - Collection file exists
- Automatically creates them if missing

---

### `readDB.js`
- Reads data from a collection JSON file
- Returns parsed JavaScript object (array)

---

### `writeDB.js`
- Writes updated data back to the collection file
- Uses formatted JSON for readability

---

### `create-state.js`
- Creates a new record
- Adds a unique ID
- Pushes data into collection

---

### `update.js`
- Updates an existing record using `id`
- Merges new data with existing object

---

### `delete.js`
- Deletes a record by `id`
- Returns deleted item or null if not found

---

##  Usage Example

```js
import { create } from "./create-state.js";
import { update } from "./update.js";
import { remove } from "./delete.js";
import { readDB } from "./readDB.js";

// Create
create("users", { name: "Sunil", email: "sunil@gmail.com" });

// Read
const users = readDB("users");

// Update
update("users", "id123", { name: "Updated Name" });

// Delete
remove("users", "id123");
```

# Purpose
This project is designed for:
- Learning backend architecture
- Understanding how databases work internally
- Building a custom lightweight DB system


## Notes for Developers
- Keep logic separated (DB, Schema, Model)
- Avoid putting validation inside CRUD directly
- Extend step-by-step, don’t over-engineer early