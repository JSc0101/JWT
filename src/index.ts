import app from "./app";

/**
 * @name main
 */
(() => {
  app.listen(app.get("port"));
  console.log("runtime");
})();
