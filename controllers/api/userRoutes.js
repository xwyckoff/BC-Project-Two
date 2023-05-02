const router = require('express').Router();

const {User,Receipt,ReceiptItem} = require('../../models')

// router.get('/', (req, res) => {
//     res.send('test');
// })
router.post('/', async (req, res) => {
    try {
      const {username, email, password} = req.body;
      const userData = await User.create(
        {
            username: username,
            email: email,
            password: password
        }
      );
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.username = userData.username;
        req.session.logged_in = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.post('/login', async (req, res) => {
    try {
        //see if we can find a user with the provided username
        const user = await User.findOne({ where: { username: req.body.username}});
        //if the user cannot be found, display an error
        if(!user) {
            res.status(400).json({message: 'Incorrect email or password, please try again!'});
            return;
        }

        //check that the password the user entered is valid
        const validPassword = user.checkPassword(req.body.password);
        //if the password is not valid, display an error
        if(!validPassword) {
            res.status(400).json({message: 'Incorrect email or password, please try again!'});
            return;
        }

        req.session.save(() => {
            req.session.user_id = user.id;
            req.session.username = user.username;
            req.session.logged_in = true;

            res.json('Logged in successfully');
        })
    } catch (err) {
        res.status(400).json(err);
    }
})

router.post('/logout', async (req, res) => {
    try {
        if(req.session.logged_in) {
            req.session.destroy(() => {
                res.status(204).end();
            });
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;