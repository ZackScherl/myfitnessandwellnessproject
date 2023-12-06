const express = require ('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ });






const app = express();

const routes = require('./routes');

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true

}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(routes)




