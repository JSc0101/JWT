import app from "./app";
import { conection } from "./database";

/**
 * @name main
 */
(async () => {
  app.listen(app.get("port"));
  await conection();
  console.log("runtime");
})();
