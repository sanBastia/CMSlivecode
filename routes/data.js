var express = require('express')
var router = express.Router()
const controllers = require('../controllers/data')
/* GET users listing. */

router.post('/data', controllers.create)
router.get('/data', controllers.read)

// user.username neh dapet dari app.js ne
module.exports = router
