const express = require('express');
const router = express.Router()
const signup = require('../Controller/signup')


router.post('/' , signup.signupUser)
router.get('/' , signup.signupUser)




module.exports = router
