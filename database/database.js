//import resources
const mongoose = require("mongoose");
//connect to DB
const connectingToDB = async () => {
  try {
    const link =
      "mongodb+srv://bushangirma9:122333@clusterecom.raaejnp.mongodb.net/";
    await mongoose.connect(link);
    console.log("database connected successfully.");
  } catch (err) {
    console.error("connection failed.", err);
    process.exit(1);
  }
};
//export function to server.js.
module.exports = connectingToDB;
