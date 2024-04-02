const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Get all items
router.get('/items', itemController.getItems);

// Get single item
router.get('/items/:id', itemController.getItem);

// Create an item
router.post(
  '/items',
  [
    check('name').notEmpty(),
    check('price').isNumeric(),
  ],
  itemController.createItem
);
router.put(
  '/items/:id',
  [check('name').notEmpty(),
    check('price').isNumeric(),],itemController.updateItem
);

router.delete('/items/:id', itemController.deleteItem);
module.exports = router;
