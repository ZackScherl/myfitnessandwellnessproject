//Creates Account Class for login in
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Account extends Model {};

Account.init(
{
    username:{
     type: DataTypes.STRING,
     allownull: false,
     primarykey: true,
 },
    password:{
     type: DataTypes.STRING,
     allownull: false,
 }
},

{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Account'
}
);
module.exports = Account;