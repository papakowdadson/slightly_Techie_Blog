const createdb = require('../../controller/createdb/createdb_controller')
const express = require('express');
const router = express.Router();

router.get('/',createdb);

module.exports = router;