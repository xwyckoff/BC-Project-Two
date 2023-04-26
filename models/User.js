const {Model, DataTypes} = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,

            validate: {
                isEmail: true
            }
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    //hash the password before it is inserted into the database
    {
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            
            beforeUpdate: async (updatedUserData) => {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
            }
        }
    },

    {
        sequelize,
        modelName: "user",
        underscored: true,
        timestamps: false,
        freezeTableName: true
    }

)

module.exports = User;