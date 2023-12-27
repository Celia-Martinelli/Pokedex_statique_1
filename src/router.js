const express = require('express');
const router = express.Router();

const mainController = require('./mainController');

router.get('/',mainController.homePage);


router.use((req, res) => {
    res.render('error', {error: 404, message: 'Pokemon Introuvable'})
});

module.exports = router;