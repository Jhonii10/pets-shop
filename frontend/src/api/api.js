import axios from "axios";

const URL = process.env.BACKEND_URL ;


export const petsShopApi = axios.create({
  baseURL: `${URL}/api`,
});

