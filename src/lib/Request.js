import axios from "axios";

const instance = axios.create({
  baseURL: "https://areve.herokuapp.com",
});

instance.defaults.timeout = 2500;

export default instance;