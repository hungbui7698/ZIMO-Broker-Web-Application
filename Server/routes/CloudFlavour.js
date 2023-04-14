const {Router} = require('express');
var {getCloudFlavour,postCloudFlavour} = require('../Controller/CloudFlavour')
const router=Router();
router.get('/',getCloudFlavour)
router.post('/',postCloudFlavour)
module.exports = router;