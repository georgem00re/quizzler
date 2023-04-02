
const axios = require("axios");

const fetchQuiz = async () => {
	return axios.get("https://the-trivia-api.com/api/questions", {
		method: "GET"
	});
};

module.exports = fetchQuiz;