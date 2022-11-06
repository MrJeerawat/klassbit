import axios from "axios";

export const ApiCourse = axios.create({
  baseURL: process.env.REACT_APP_API_COURSES,
  headers: {
    "Content-type": "application/json"
  }
});