const {Router} = require('express');
var {getInfrastructure,postInfrastructure,deleteInfrastructure, putInfrastructure} = require('../Controller/Infrastructure')
const router=Router();
router.get('/',getInfrastructure)
router.post('/',postInfrastructure)
router.delete('/',deleteInfrastructure)
router.put('/',putInfrastructure)
module.exports = router;