const {Router} = require('express');
var {getApp,postApp,deleteApp,putApp} = require('../Controller/App')
const router=Router();
router.get('/',getApp)
router.post('/',postApp)
router.delete('/',deleteApp)
router.put('/',putApp)
module.exports = router;