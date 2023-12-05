const router = require('.');
const Account = require('../../models/Account')

app.post('/auth', function(req, res){

let username = req.body.username;
let password = req.body.password;

Account.findbyPk(username).then(function(user){
    



}

);



});