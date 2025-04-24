const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const boddyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;

app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ exteded: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
// all routes
const authRoutes = require("./src/users/user.route");
app.use("/api/auth", authRoutes);

main()
  .then(() => console.log("Mongodb is succesfully connected"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_URL);
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
