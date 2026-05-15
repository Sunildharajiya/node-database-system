# Node.js Encrypted File Database API

-----

A lightweight Node.js file-based database API with AES-256 encryption and full CRUD operations. This project demonstrates how to build a simple backend database system using Express.js, File Storage, and Encryption.

------

# Features
- CRUD API (Create, Read, Update, Delete)
- File-based database using JSON
- AES-256-CBC encryption for stored data
- Custom unique ID generator
- Lightweight and easy to run
- Built using Express.js
- Beginner-friendly backend architecture

  # enveronment variables
Create a ".env" file in the project root.
```
SECRET_KEY=<your_genrated_secrate_key>
```
## Genrate SECRET_KEY
 for Genrate SECRET_KEY run this in terminal or cmd and pest genrated text in '.env' file
 
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## Read documentation
- [Model layer](Documentation/modelLayer.md)
