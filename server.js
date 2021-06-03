const express = require(`express`);
const app = express();
const port = 3000;
const budget = require(`./models/budget`);


app.use(express.static(__dirname + `/public`));


app.get(`/budget`, (req, res) => {
    res.render(`index.ejs`, { budget })
})

app.get(`/budget/:id`, (req, res) => {
    res.render(`expenditure.ejs`, {
        budget: budget[req.params.id]
    })
})

app.listen(port);

