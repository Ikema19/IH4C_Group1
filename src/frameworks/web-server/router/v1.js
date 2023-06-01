import {
  fetchModelCourseById,
  fetchModelCourses,
} from "@/modules/core/course/application/usecase";
import {
  fetchSpotById,
  fetchSpots,
} from "@/modules/core/spot/application/usecase";
import express from "express";

const v1Router = express.Router();

v1Router.get("/spots", (_, res) => {
  fetchSpots();
  res.status(200).json({ message: "Hello from v1" });
});
v1Router.get("/spots/:spotId", (_, res) => {
  fetchSpotById();
  res.status(200).json({ message: "Hello from v1" });
});

v1Router.get("/courses/models", (_, res) => {
  fetchModelCourses();
  res.status(200).json({ message: "Hello from v1" });
});
v1Router.get("/courses/models/:modelId", (_, res) => {
  fetchModelCourseById();
  res.status(200).json({ message: "Hello from v1" });
});

export { v1Router };
