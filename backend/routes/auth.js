const express = require('express');
const User = require('../models/User')
const router = express.Router()
const { body, validationResult } = require('express-validator');


router.post('/createuser', [
    body('email', 'Enter a valid email').isEmail(),
    body('name', 'Enter a valid name').isLength({ min: 6 }),
    body('phone', 'Enter a valid phone').isLength({ min: 10, max: 10 }),
    body('password', 'set password of atleast 5 character').isLength({ min: 5 })
], async (req, res) => {
    console.log('entered in creating loop');
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });

    }

    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry! User with email already exists" })
        }
        console.log('checking email');

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password
        });
        console.log('user created');

    } catch {
        console.error(error.message)
        res.status(500).send("Some error occured")

    }
})

module.exports = router