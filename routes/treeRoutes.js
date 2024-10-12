const express = require('express');
const router = express.Router();
const treeController = require('../controllers/treeController');

router.get('/', treeController.getTrees);
router.get('/create', treeController.createTreeForm);
router.post('/create', treeController.createTree);
router.get('/edit/:id', treeController.editTreeForm);
router.post('/edit/:id', treeController.editTree);
router.get('/delete/:id', treeController.deleteTree);

module.exports = router;
