const sequelize = require('../config/connection');
const { User,Products,Category,Brand } = require('../models');

const userData = require('./userData.json');
const productData = require('./productData.json');
const brandData = require('./brandData.json');
const categoryData = require('./categoryData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  
const categories = await Category.bulkCreate(categoryData)
const brand = await Brand.bulkCreate(brandData)
const product = await Products.bulkCreate(productData)
  process.exit(0);
};

seedDatabase();
