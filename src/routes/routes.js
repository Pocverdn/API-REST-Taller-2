const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const homeRoutes = require('./homeRoutes');
const requestRoutes = require('./requestRoutes');
const uploadRoutes = require('./s3Routes.js');


router.use('/auth', authRoutes);
router.use('/home', homeRoutes);
router.use('/request', requestRoutes);
router.use('/upload', uploadRoutes);

module.exports = router;