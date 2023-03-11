import express, { Application } from "express";

/**
 * @constant app
 */
const app: Application = express();

/**
 * @name setting
 */
app.set('port', 3000);
export default app;
