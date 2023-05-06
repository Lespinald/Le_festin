const { Router } = require('express');
const router = Router();

const { getUsers, getNombreUsers } = require('../controllers/usuariosController')

router.get('/users', getUsers);
router.get('/nombresUsers', getNombreUsers)

module.exports = router;