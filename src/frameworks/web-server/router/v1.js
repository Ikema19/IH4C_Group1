import express from "express";

const v1Router = express.Router();

v1Router.get("/", (_, res) => {
  res.status(200).send({ message: "Hello, world!" });
});

export { v1Router };
