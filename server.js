const express = require ('express');
const session = require('express-session');

const app = express();

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true

}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));






