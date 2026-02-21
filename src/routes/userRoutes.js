const { Router } = require('express');
const { postUsuario } = require('../controllers/userController');

const router = Router();

router.post('/users', postUsuario);

module.exports = router;
