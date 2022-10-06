import axios from "axios"

export const BASE_URL = process.env.PARSER_URL
export const API = axios.create({ baseURL: BASE_URL })
