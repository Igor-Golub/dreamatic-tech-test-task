import axios from "axios";
import { API_BASE_URL, API_KEY } from "../constants";

const params = new URLSearchParams([["access_key", API_KEY]]);

const instance = axios.create({
  baseURL: API_BASE_URL,
  params,
});

export default instance;
