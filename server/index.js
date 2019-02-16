const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const packageInfo = require("./package.json");

console.log("STARTUP");

const app = express();
const cwd = process.cwd();
console.log(cwd);
const uiPath = path.resolve(cwd, "ui", "dist");
console.log(uiPath);
const docsPath = path.resolve(cwd, "docs", "dist");
console.log(docsPath);

app.use(express.static(uiPath));
app.use(express.static(docsPath));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(bodyParser.json({ limit: "10mb" }));

const port = process.env.PORT || 3200;
app.set("port", port);

process.on("SIGTERM", () => {
  console.log("SIGTERM: Exiting…");
  process.exit(0);
});

process.on("SIGINT", () => {
  process.exit(-1);
});

process.on("uncaughtException", error => {
  console.error(error);
  process.exit(-1);
});

app.listen(port, () => {
  console.log(`Listening in port ${port}`);
  console.log(`- http://127.0.0.1:${port}`);
  console.log(`- http://0.0.0.0:${port}`);
});

module.exports = app;
