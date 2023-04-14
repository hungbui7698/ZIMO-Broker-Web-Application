const { Router } = require('express');
const { postSliceRequest }  = require('../Controller/SliceRequest');

let router = Router();

router.post('/', postSliceRequest);

module.exports = router;