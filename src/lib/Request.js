import axios from "axios";

const instance = axios.create({
	baseURL: "http://193.122.121.118:8000",
});

instance.defaults.timeout = 2500;

export default instance;
