import axios from "axios";

export const ApiCourse = axios.create({
  baseURL: "http://localhost:8888/api/courses",
  headers: {
    "Content-type": "application/json"
  }
});