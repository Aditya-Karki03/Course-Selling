import express from "express";
import appRouter from "./routes/appRouter";
import courseRouter from "./routes/course";
import mongoose from "mongoose";
const app = express();
const port = 3000;

app.use("/user", appRouter);
app.use("/course", courseRouter);

import dotenv from "dotenv";
dotenv.config();
const dburl: string = process.env.db_url || "";
mongoose.connect(dburl || "");

app.listen(port, () => {
  console.log("App is listening at port 3000");
});
