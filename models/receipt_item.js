const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ReceiptItem extends Model {}

ReceiptItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    receipt_id: {
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
    modelName: "receipt_item",
  }
);

module.exports = ReceiptItem;