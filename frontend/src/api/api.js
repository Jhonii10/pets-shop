import axios from "axios";

const URL = process.env.NEXT_PUBLIC_BACKEND_URL ;

export const petsShopApi = axios.create({
  baseURL: `${URL}/api`,
});

