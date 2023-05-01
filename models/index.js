const User = require('./User');
const Receipt = require('./receipt');
const ReceiptItem = require('./receipt_item');


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

module.exports = {User,Receipt,ReceiptItem}