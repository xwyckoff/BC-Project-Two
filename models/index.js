const User = require('./User');
const Cart = require('./cart');
const Receipt = require('./Receipt');
const Category = require('./Category');
const Brand = require('./Brand');
const ReceiptItem = require('./receipt_item');
const CartItem = require('./cart_item');
const Products = require('./Products');




User.hasMany(Receipt, {
    onUpdate: 'CASCADE'
});

Receipt.belongsTo(User,{
    foreignKey:'user_id'
});

ReceiptItem.belongsTo(Receipt,{
    foreignKey:'receipt_id'
});
Receipt.hasMany(ReceiptItem,{
    onUpdate: 'CASCADE'
});
Cart.belongsTo(User,{
    foreignKey:'user_id'
});

CartItem.belongsTo(Cart,{
    foreignKey:'cart_id'
});

Products.hasMany(CartItem, {
    onUpdate: 'CASCADE'
});

CartItem.belongsTo(Products, {
    foreignKey:'product_id'
});
Cart.hasMany(CartItem,{
    onUpdate: 'CASCADE'
});
Products.belongsTo(ReceiptItem,{
    foreignKey:'product_id'
});
Brand.belongsTo(Products,{
    foreignKey:'brand_id'
});
Products.belongsTo(Category,{
    foreignKey:'category_id'
});
module.exports = {User,Receipt,ReceiptItem,Cart,CartItem,Products,Brand,Category}