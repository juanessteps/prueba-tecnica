const { Router } = require('express');
const { postUsuario, getUsuarios } = require('../controllers/userController');

const router = Router();

router.post('/users', postUsuario);
router.get('/users', getUsuarios);

module.exports = router;
