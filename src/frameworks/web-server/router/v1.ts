import {
  fetchModelCourseById,
  fetchModelCourses,
} from "@/modules/core/course/application/usecase";
import express from "express";
import { spots } from "@/frameworks/data";

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
  const result = fetchModelCourses();
  console.log(result);

  res.status(200).send({
    courses: [
      [
        {
          id: "1",
          name: "Sports1",
          photo: "https://example.com/photo1.jpg",
        },
        {
          id: "2",
          name: "Sports2",
          photo: "https://example.com/photo2.jpg",
        },
      ],
    ],
  });
});
v1Router.get("/courses/models/:modelId", (_, res) => {
  const result = fetchModelCourseById();
  console.log(result);

  res.status(200).send({
    course: [
      {
        id: "1",
        name: "Sports1",
        description: "Description 1",
        photo: "https://example.com/photo1.jpg",
        geometry: {
          location: {
            lat: 11.111111,
            lng: 11.111111,
          },
        },
      },
      {
        id: "2",
        name: "Sports2",
        description: "Description 2",
        photo: "https://example.com/photo2.jpg",
        geometry: {
          location: {
            lat: 22.222222,
            lng: 22.222222,
          },
        },
      },
    ],
  });
});

export { v1Router };
