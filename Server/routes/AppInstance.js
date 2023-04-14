const {Router} = require('express');
var {getAppInstance,postAppInstance,deleteAppInstance,putAppInstance} = require('../Controller/AppInstance')
const router=Router();
router.get('/',getAppInstance)
router.post('/',postAppInstance)
router.delete('/',deleteAppInstance)
router.put('/',putAppInstance)
module.exports = router;