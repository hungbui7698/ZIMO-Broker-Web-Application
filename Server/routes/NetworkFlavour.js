const {Router} = require('express');
var {getNetworkFlavour,postNetworkFlavour,putNetworkFlavour,deleteNetworkFlavour} = require('../Controller/NetworkFlavour')
const router=Router();
router.get('/',getNetworkFlavour)
router.post('/',postNetworkFlavour)
router.put('/',putNetworkFlavour)
router.delete('/',deleteNetworkFlavour)
module.exports = router;