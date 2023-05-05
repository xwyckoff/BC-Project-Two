const User = require('./User');
const Cart = require('./cart');
const Receipt = require('./Receipt');
const ReceiptItem = require('./receipt_item');
const CartItem = require('./cart_item');
const Products = require('./Products');
const Category = require('./Category');
const Brand = require('./Brand');




User.hasMany(Receipt, {
    foreignKey: 'user_id'
});

Receipt.belongsTo(User,{
    foreignKey:'user_id'
});

ReceiptItem.belongsTo(Receipt,{
    foreignKey:'receipt_id'
});
Receipt.hasMany(ReceiptItem,{
    foreignKey:'receipt_id'
});
Cart.belongsTo(User,{
    foreignKey:'user_id'
});

CartItem.belongsTo(Cart,{
    foreignKey:'cart_id'
});
Cart.hasMany(CartItem,{
    foreignKey:'cart_id'
});
Products.hasMany(ReceiptItem,{
    foreignKey:'product_id'
});
Brand.hasMany(Products,{
    foreignKey:'brand_id'
});
Category.hasMany(Products,{
    foreignKey:'category_id'
});
module.exports = {User,Receipt,ReceiptItem,Cart,CartItem,Products,Brand,Category}