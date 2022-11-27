// const mongoose = require('mongoose');

// // Wrap Mongoose around local connection to MongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/socialnetworkDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Export connection
// module.exports = mongoose.connection;

const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
