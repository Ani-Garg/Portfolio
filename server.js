const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3000;

// Set up storage engine
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

// Initialize upload variable
const upload = multer({ storage: storage }).single('file');

// Endpoint for file upload
app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.status(500).send('File upload failed.');
        }
        res.send('File uploaded successfully.');
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
document.getElementById("navIcon").addEventListener("click", function () {
  const menu = document.getElementById("navigationMenu");
  menu.classList.toggle("show");
});

