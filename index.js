const mongoose = require("mongoose");
const express = require("express");
const router = require("./routes");
const cors = require("cors");
const dotenv = require("dotenv").config();

console.log(process.env);
mongoose.connect(process.env.MONGO_URL).then(() => {
  const app = express();
  const corsOptions = {
    optionsSuccessStatus: 200,
    origin: process.env.CORS_ORIGIN,
  };
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use("/", router);

  app.listen(5000, () => {
    console.log("Serverus Erectus");
  });
});
