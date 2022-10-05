import axios from "axios"

export const BASE_URL = "http://localhost:5000/api"
export const API = axios.create({ baseURL: BASE_URL })