import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "deployed link goes here" 
    : "http://localhost:3000";

    // https://protur-api.herokuapp.com/

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
