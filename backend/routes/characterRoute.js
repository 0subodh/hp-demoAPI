const express = require('express');
const characterController = require('../controllers/characterController');

const router = express.Router();

router.param('id', characterController.checkID);

router.route('/').get(characterController.getAllCharacters);

router.route('/:id').get(characterController.getCharacter);

module.exports = router;
