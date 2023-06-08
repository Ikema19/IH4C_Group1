import { Course as BaseCourseType, Spot, Id, DeepReadonly } from "@/@types";

export const spots = [
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
] as const satisfies DeepReadonly<Spot[]>;

type Course = Omit<BaseCourseType, "route"> & {
  route: Id[];
};

export const courses = [
  {
    id: "1",
    route: ["1", "2", "3"],
  },
  {
    id: "2",
    route: ["2", "1"],
  },
] as const satisfies DeepReadonly<Course[]>;
