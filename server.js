const express = require(`express`);
const app = express();
const port = 3000;
const data = require(`./models/budget`);

app.get(`/`, (req, res) => {
    res.send(data)
})

app.listen(port);

