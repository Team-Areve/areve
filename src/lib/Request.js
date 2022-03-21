import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000",
});

instance.defaults.timeout = 2500;

export default instance;