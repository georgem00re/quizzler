
import axios, { AxiosInstance } from "axios";

export const getQuiz = async () => {
	return axios.get(`http://localhost:${import.meta.env.VITE_APP_NODEJS_BACKEND_PORT}`)
}