const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const homeRoutes = require('./homeRoutes');
const requestRoutes = require('./requestRoutes');


router.use('/auth', authRoutes);
router.use('/home', homeRoutes);
router.use('/request', requestRoutes);


module.exports = router;