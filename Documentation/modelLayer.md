# Model Layer Documentation
------
## What is the Model Layer?

The Model Layer is the bridge between the developer and the database engine.
It provides a clean and structured API to interact with collections, schemas, and CRUD operations.
Instead of directly calling low-level CRUD functions like:

```js
create("users", schema, data)
```
developers interact with models:
```js
User.create(data)
```
This architecture makes the database easier to use, scalable, and closer to real-world database systems.

-----
## Purpose of the Model Layer
The Model Layer is responsible for:
- Connecting collections with schemas
- Providing reusable database methods
- Creating a clean developer experience
- Managing database interaction flow
- Abstracting internal CRUD operations

### Architecture flow
```
Application
    ↓
Model Layer
    ↓
Schema Validation Layer
    ↓
CRUD Layer
    ↓
Cluster Storage (JSON Files)
```
----
## Responsibilities of the Model Layer
### 1. Collection Management
Each model is connected to a specific collection.
Example:
```js
const User = new Model("users", userSchema);
```
This automatically maps the model to:
Clusters/users.json

### 2. Schema Integration
Models automatically use schemas during create and update operations.
Example:
```js
await User.create({
  name: "Sunil",
  email: "sunil@gmail.com",
  password: "123456"
});
```
The model internally:
- validates fields
- checks types
- hashes passwords
- generates IDs
- verifies unique fields

### 3. CRUD Abstraction
The model hides low-level file operations from developers.
Instead of:
```js
readDB("users")
writeDB("users", data)
```
Developers use:
```js
User.find()
User.update(id, data)
User.delete(id)
```

----

## Base Model Structure
```Js
export class Model {
  constructor(collection, schema) {
    this.collection = collection;
    this.schema = schema;
  }
}
```

-----

## Core Model Methods
#### create()
Creates a new document inside the collection.
```js
await User.create({
  name: "Sunil"
});
```
Internal Flow
```
create()
   ↓
validate schema
   ↓
generate id
   ↓
hash password
   ↓
write to collection
```
#### find()
Returns all documents from the collection.
```js
const users = User.find();
```
#### findById()
Returns a single document using its ID.
```js
const user = User.findById(id);
```
#### update()
Updates an existing document.
```js
await User.update(id, {
  name: "Updated Name"
});
```
The update method:
- merges old and new data
- validates schema again
- preserves document structure

#### delete()
Deletes a document from the collection.
```js
User.delete(id);
```
------
## Example Model
```js
import { Model } from "./model.js";
import { Schema } from "../Functions/schema/schema-core.js";

const userSchema = new Schema({
  id: { type: "id", auto: true },

  name: {
    type: "string",
    required: true
  },

  email: {
    type: "email",
    required: true,
    unique: true
  },

  password: {
    type: "password",
    required: true
  }
});

export const User = new Model("users", userSchema);
```
------
## Why the Model Layer Exists
Without the Model Layer:
```js
create("users", schema, data)
update("users", id, data)
```
Problems:
- repetitive code
- manual schema passing
- poor scalability
- difficult maintenance
With the Model Layer:
```js
User.create(data)
User.find()
```
Benefits:
- cleaner syntax
- reusable structure
- centralized collection management
- easier scalability
- better developer experience
-----
## Summary
The Model Layer is the main interaction interface of the database system.
It connects schemas, CRUD operations, and storage into a unified developer-friendly API.
This layer transforms the project from a simple JSON file handler into a structured database engine architecture.