import express from "express";
import appRouter from "./routes/appRouter";
import courseRouter from "./routes/course";
const app = express();
const port = 3000;

app.use("/user", appRouter);
app.use("/course", courseRouter);

app.listen(port, () => {
  console.log("App is listening at port 3000");
});
