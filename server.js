const express = require(`express`);
const app = express();
const port = 3000;
const bodyParser = require(`body-parser`);
const budget = require(`./models/budget`);

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + `/public`));

app.use((req, res, next) => {
    next();
});

app.post(`/budget`, (req, res) => {
    budget.push(req.body)
    res.redirect(`/budget`)

})

app.get(`/budget`, (req, res) => {
    res.render(`index.ejs`, { budget })
})

// New purchase 
app.get(`/budget/new`, (req, res) => {
    res.render(`new.ejs`)
})

app.get(`/budget/:id`, (req, res) => {
    res.render(`expenditure.ejs`, {
        budget: budget[req.params.id]
    })
})

app.listen(port);

