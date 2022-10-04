const express = require("express");
const cors = require("cors")
const { corsOptions } = require("./cors-policy/policy");
const entryApi= require('./api/entry-api/app-route');
const mediaApi= require('./api/media-api/app-route');
const app = express();

configureApp = () => {
    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }))
}

configureApp();

app.use('/entry', entryApi);
app.use('/media', mediaApi);



app.get("/express", ((req, res) => {
    res.send('hello world');
}))


app.listen(process.env.PORT|8001)
module.exports = app;

//login change

//new_branch

