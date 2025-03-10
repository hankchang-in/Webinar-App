const express = require('express')
const authController = require('../Controller/authController')
const router  = express.Router()


router.post('/' , authController.getAuthenticate);

// router.post("/" , auth.getAuthenticate)





module.exports = router