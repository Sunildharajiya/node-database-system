import { User } from "./Model/user.model.js";

async function testDB() {
  console.log("🚀 Testing Started...\n");

  // CREATE
  const user = await User.create({
    name: "Sunil",
    email: "sunil@gmail.com",
    password: "123456"
  });
  console.log("Created:", user);

  // READ
  const allUsers = User.find();
  console.log("All Users:", allUsers);

  // FIND ONE
  const found = User.findById(user.id);
  console.log("Found:", found);

  // UPDATE
  const updated = await User.update(user.id, {
    name: "Updated Sunil"
  });
  console.log("Updated:", updated);

  // DELETE
  const deleted = User.delete(user.id);
  console.log("Deleted:", deleted);

  // FINAL STATE
  console.log("Final Users:", User.find());
}

testDB();