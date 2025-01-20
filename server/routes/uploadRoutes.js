const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { createEmailTemplate } = require('../controllers/uploadController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); 
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname); 
        cb(null, Date.now() + ext);
    }
});

const upload = multer({ storage });

router.post('/', upload.fields([{ name: 'logo', maxCount: 1 }, { name: 'heroImage', maxCount: 1 }]), createEmailTemplate);

module.exports = router;
