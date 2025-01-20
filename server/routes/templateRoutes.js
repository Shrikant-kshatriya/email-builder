
const express = require('express');
const { getTemplate, getAllTemplate } = require('../controllers/templateController');
const router = express.Router();

router.get('/:id', getTemplate);
router.get('/', getAllTemplate);

module.exports = router;