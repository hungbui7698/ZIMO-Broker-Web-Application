const {Router} = require('express');
var {getAppGroup,postAppGroup,deleteAppGroup,putAppGroup} = require('../Controller/AppGroup')
const router=Router();
router.get('/',getAppGroup)
router.post('/',postAppGroup)
router.delete('/',deleteAppGroup)
router.put('/',putAppGroup)
module.exports = router;