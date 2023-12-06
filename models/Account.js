//Creates Account Class for login in
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Account extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

Account.init(
{
    email:{
     type: DataTypes.STRING,
     allownull: false,
     primarykey: true,
     unique: true,
     validate:{
        isEmail:true
     },
 },
    password:{
     type: DataTypes.STRING,
     allownull: false,
 }
},
{
hooks: {
    beforeCreate: async (newUserData) => {
      newUserData.password = await bcrypt.hash(newUserData.password, 10);
      return newUserData;
    },
    beforeUpdate: async (updatedUserData) => {
      updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
      return updatedUserData;
    },
},
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