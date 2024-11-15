const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/protected', authController.verifyToken, (req, res) => {
    res.status(200).json({ message: 'Access granted', user: req.user });
});


module.exports = router;
