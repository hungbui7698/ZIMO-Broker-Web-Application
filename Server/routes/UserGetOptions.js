const {Router} = require('express');
var {postUserGetOptions} = require('../Controller/UserGetOptions')
const router=Router();
router.post('/',postUserGetOptions)
module.exports = router;