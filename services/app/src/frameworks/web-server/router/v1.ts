import express from "express";
import { courses, spots } from "@/frameworks/data";
import { Exception } from "@/utils/exception";

const v1Router = express.Router();

v1Router.get("/spots", (_, res) => {
  res.status(200).send({
    spots,
  });
});

v1Router.get("/spots/:spotId", (req, res) => {
  const { spotId } = req.params;
  const spot = spots.find((spot) => spot.id === spotId);

  res.status(200).send({
    spot,
  });
});

v1Router.get("/courses/models", (_, res) => {
  const modelCourses = courses.map((course) => {
    const route = course.route.map((routeId) => {
      return spots.find((spot) => spot.id === routeId);
    });

    return {
      ...course,
      route,
    };
  });

  res.status(200).send({
    courses: modelCourses,
  });
});
v1Router.get("/courses/models/:modelId", (req, res) => {
  const { modelId } = req.params;

  const findedCourse = courses.find((course) => course.id === modelId);
  if (!findedCourse)
    throw new Exception("モデルコースが見つかりませんでした", 404);

  const course = {
    ...findedCourse,
    route: findedCourse.route.map((routeId) => {
      return spots.find((spot) => spot.id === routeId);
    }),
  };

  res.status(200).send({
    course,
  });
});

export { v1Router };
