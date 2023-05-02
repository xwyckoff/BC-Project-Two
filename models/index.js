const User = require('./User');
const Cart = require('./cart');
const Receipt = require('./receipt');
const ReceiptItem = require('./receipt_item');
const CartItem = require('./cart_item');



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

module.exports = {User,Receipt,ReceiptItem,Cart,CartItem}