//Dependencies
require("dotenv/config");
require("colors");

const db = require("./database/db");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const exerciseRouter = require("./routes/exerciseRoutes");
const userRouter = require("./routes/userRoutes");
const workoutRouter = require("./routes/workoutRoutes");
const requestRouter = require("./routes/request.Route");
const errorHandler = require("./middlewares/errorHandler");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

//Database

db();

//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "https://cyberpump-orcin.vercel.app", //it is important to add these two lines otherwise the cookies will not work between frontend and backend since they are running on two different servers
    credentials: true,
  })
);

//Routers
app.use("/api/user", userRouter);
app.use("/api/exercise", exerciseRouter);
app.use("/api/workout", workoutRouter);
app.use("/api/request", requestRouter);
app.use("/", (req, res) => {
  res.send("server is running");
});

//Error Handler
app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`server listening on http://localhost:${PORT}`.bgCyan)
);
