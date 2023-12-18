//Dependencies
require("dotenv/config");
require("colors");

const db = require("./database/db");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const exerciseRouter = require("./routes/exerciseRoutes");
const userRouter = require("./routes/userRoutes");
const workoutRouter = require("./routes/workoutRoutes")

//Database

db();

//Middlewares
app.use(express.json());

//Routers
app.use("/user", userRouter)
app.use("/exercise", exerciseRouter);
app.use("/workout", workoutRouter)

app.listen(PORT, () =>
  console.log(`server listening on http://localhost:${PORT}`.bgCyan)
);
