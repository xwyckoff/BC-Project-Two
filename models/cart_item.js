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
      // references:{
      //   model:'cart',
      //   key:'id'
      // }
    },
    product_id: {
      type: DataTypes.INTEGER,
    //   bring back after product table is created.
      // references:{
      //   model:'products',
      //   key:'id'
      // }
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