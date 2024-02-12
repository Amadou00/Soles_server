const express = require('express')
const router = express.Router()
const loginControlleur = require('../controller/loginController')

router.get("/", loginControlleur.get)

module.exports = router;