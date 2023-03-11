import express, { Application } from "express";
import { router } from "./routes/auth";
import morgan from "morgan";

/**
 * @constant app
 */
const app: Application = express();

/**
 * @name setting
 */
app.set("port", 3000);

/**
 * @name middlewares
 */
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/auth", router);

export default app;
