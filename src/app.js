const express = require('express');
const path = require('path');
const app = express();
const indexRoute = require('./routes/home.Routes')


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, '../public')))
app.use('/', indexRoute);

const port = 3000;

app.listen(port, () => {
    console.log(`el servidor esta corriendo en https://localhost:${port}`);
});