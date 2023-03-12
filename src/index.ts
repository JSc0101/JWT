import app from "./app";
import { conection } from "./database";
import dotenv from "dotenv";

dotenv.config();

/**
 * @name main
 */
(async () => {
  app.listen(app.get("port"));
  await conection();
  console.log("runtime");
})();
