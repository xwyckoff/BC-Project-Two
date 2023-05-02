const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Products extends Model {}

Products.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    product_description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    brand_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},


  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "products",
  }
);

module.exports = Products;