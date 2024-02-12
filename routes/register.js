const express = require('express')
const router = express.Router()
const registerControlleur = require('../controller/loginController')

router.post("/", registerControlleur.get)

module.exports = router;