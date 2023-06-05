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
  const result = fetchSpots();
  console.log(result);

  res.status(200).send({
    spots: [
      {
        id: "1",
        name: "Spot 1",
        description: "Description 1",
        photo: "https://example.com/photo1.jpg",
        geometry: {
          location: {
            lat: 11.111111,
            lng: 11.111111,
          },
        },
      },
    ],
  });
});
v1Router.get("/spots/:spotId", (_, res) => {
  const result = fetchSpotById();
  console.log(result);

  res.status(200).send({
    spot: {
      id: "1",
      name: "Spot 1",
      description: "Description 1",
      photo: "https://example.com/photo1.jpg",
      geometry: {
        location: {
          lat: 11.111111,
          lng: 11.111111,
        },
      },
    },
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
