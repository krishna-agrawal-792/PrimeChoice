// This is express ka server
// rest object used to create apiS
// api mei / means for home and uske aage page ke liye likh do jo bhi hai
// api mein request and response
// app ko listen krne ke liye port

import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
//configure env
dotenv.config();
//databse config
connectDB();
//rest object
const app = express();
//middelwares
// app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

//PORT
// const PORT = 8080;
// //run listen
// app.listen(PORT, () => {
//   console.log(`Server Running on ${PORT}`.bgCyan.white);
// });
// If we do like above, port is exposed, so we add this in .env file, environmental variable file and in this we keep all our confidential data
// like port, mongo db url, json token and other secret keys, for this we use dotenv package and configure it

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
