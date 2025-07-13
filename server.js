//import resources.
require("dotenv").config();
const express = require("express");
const connectingToDB = require("./database/database");
const CommerceRoute = require("./routes/Ecom-routes");
//create app for express
const app = express();
// //connect to DB.
const Port = process.env.PORT;
connectingToDB();
//middleware
app.use(express.json());
//main route
app.use("/api/product", CommerceRoute);
//create a server

//check DB connection before running server.
// const startServer = async () => {
//   try {
//     await connectingToDB();
//     app.listen(Port, () => {
//       console.log(`Server is running on port ${Port}`);
//     });
//   } catch (e) {
//     console.log("Failed to start server:", e);
//   }
// };
// startServer();
app.listen(Port, () => {
  // console.log(Port);
  console.log(`server is running on port ${Port}`);
});
//notes:
//finish the remaining handlers(up and del);also fix connection to DB!
