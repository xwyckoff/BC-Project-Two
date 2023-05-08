const router = require('express').Router();
const {Cart, CartItem} = require('../../models');

router.post('/', async (req, res) => {
    try {
        const cart = await Cart.findAll({
            where: {
                user_id: req.session.user_id
            }
        })

        if(cart.length != 0) {
            const newItem = await CartItem.create({
                cart_id: cart[0].get().id,
                product_id: req.body.product_id,
                quantity: req.body.quantity
            })

            res.json(newItem);
        } else {
            const newCart = await Cart.create({
                user_id: req.session.user_id
            })

            const newItem = await CartItem.create({
                cart_id: newCart[0].get().id,
                product_id: req.body.product_id,
                quantity: req.body.quantity
            })

            res.json(newItem);
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    const deletedItem = await CartItem.destroy({
        where: {
            id: req.body.id
        }
    })

    res.json(deletedItem);
});

module.exports = router;