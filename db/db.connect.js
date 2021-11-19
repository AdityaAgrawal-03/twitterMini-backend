const mongoose = require("mongoose");
const DB_KEY = process.env['uri'];

async function initializeDBConnection() {
  try {
    await mongoose.connect(DB_KEY, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("succesfully connected");
  } catch (error) {
    console.error("connection failed: ", error)
  }
};

module.exports = { initializeDBConnection };