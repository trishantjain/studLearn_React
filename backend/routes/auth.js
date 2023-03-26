const express = require('express');
const router = express.Router()
const User =  require('../models/User')

router.get('/createuser', (req, res)=>{
    console.log(req.body);
    const user = User(req.body);
    user.save();
    console.log('saved in database');
    res.send(req.body);
})

module.exports = router