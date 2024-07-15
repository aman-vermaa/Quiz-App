require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const connectToDB = require("./utils/connectToDB");
const userRoutes = require("./routes/userRoutes");
const quizRoutes = require("./routes/quizRoutes");

const app = express();
app.use(cors({origin: "http://127.0.0.1:5173", credentials: true}));
app.use(cookieParser());
app.use(express.json()); //order matter in middlewares
app.use("/api", userRoutes);
app.use("/api", quizRoutes);

connectToDB().then(() => {
  app.listen(5000, () => {
    console.log("Listening to 5000");
  });
});
