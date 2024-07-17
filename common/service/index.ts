import axios from "axios";
import { URL_API } from "../config/constants";

export const pokeApi = axios.create({
  baseURL: URL_API,
});
