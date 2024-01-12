const express = require('express');
const app = express();
const path = require('path');
const indexRoute = require('./routes/home.Routes')

app.use('/', indexRoute);

app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const port = 3008;

app.listen(port, () => {
    console.log(`el servidor esta corriendo en https://localhost:${port}`);
});