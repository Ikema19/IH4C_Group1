import axios from "axios";
import { Course, CourseApi } from "../types";

const path = "http://localhost:3001/api/v1/courses";

type FetchModelCourseListResponse = {
    courses: Course[]
}

type FetchModelCourseByIdResponse = {
    course: Course
}

export const externalCourseApi = (): CourseApi => {
    const fetchModelCourseList = async () => {
        const url = `${path}/models`;

        const response = await axios.get<FetchModelCourseListResponse>(url);
        return response.data.courses;
    }

    const fetchModelCourseById = async (id: string) => {
        const url = `${path}/models/${id}`;

        const response = await axios.get<FetchModelCourseByIdResponse>(url);
        return response.data.course;
    }

    return {
        fetchModelCourseList,
        fetchModelCourseById
    }
}