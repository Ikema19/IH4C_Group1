import { Course, CourseApi } from "../types";
import { spots, courses } from "../../../constants";
import { Spot } from "../../spot";

export const MockCourseApi = (): CourseApi => {
    const fetchModelCourseList = async () => {
        const modelCourses = courses.map(course => {
            const routes = course.route.map(routeId => {
                return spots.find(spot => spot.id === routeId) as unknown as Spot;
            });

            return {
                ...course,
                route: routes
            };
        });

        return modelCourses as unknown as Course[];
    }

    const fetchModelCourseById = async (id: string) => {
        const course = courses.find(course => course.id === id) as unknown as Course;
        const routes = course.route.map(spot => {
            return spots.find(spot => spot.id === spot.id) as unknown as Spot;
        });

        return {
            ...course,
            route: routes
        };
    }

    return {
        fetchModelCourseList,
        fetchModelCourseById
    }
}