import express from "express";
import appRouter from "./routes/appRouter";
import courseRouter from "./routes/course";
import { connectDB } from "./config/db";
const app = express();
const port = 3000;

connectDB();

app.use("/user", appRouter);
app.use("/course", courseRouter);

app.listen(port, () => {
  console.log("App is listening at port 3000");
});
