const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
    res.json({ message: 'Auth Route is Working' });
});

module.exports = router;
