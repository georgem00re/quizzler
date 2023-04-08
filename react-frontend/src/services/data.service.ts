
import axios, { AxiosInstance } from "axios";

export const getQuiz = async () => {
	return axios.get(`http://localhost:${process.env.NODEJS_BACKEND_PORT}`)
}