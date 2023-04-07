
const axios = require("axios");

const fetchQuiz = async () => {
	return axios.get("https://the-trivia-api.com/api/questions?limit=5", {
		method: "GET"
	});
};

module.exports = fetchQuiz;