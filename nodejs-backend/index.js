const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000
const fetchQuiz = require("./utils/fetchQuiz.js");
const cors = require("cors");
const schedule = require("node-schedule");
var quiz = null;

// define http server routes
app.get("*", (req, res) => {
    res.send(quiz);
})

// define scheduler to run fetchQuiz every day at midnight
schedule.scheduleJob('0 0 * * *', async () => {
    const res = await fetchQuiz()
    quiz = res.data;
})

// fetch quiz and run server
fetchQuiz().then((res) => {
    quiz = res.data
}).then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
});
