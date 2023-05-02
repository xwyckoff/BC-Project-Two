const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CartItem extends Model {}

CartItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    cart_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model:'receipt',
        key:'id'
      }
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    //   bring back after product table is created.
    //   references:{
    //     model:'product',
    //     key:'id'
    //   }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
  
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "cart_item",
  }
);

module.exports = CartItem;