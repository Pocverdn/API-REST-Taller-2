const express = require('express');
const router = express.Router();

const { loginController, registerController } = require('../controllers/authController');


/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Inicia sesión de un árbitro
 *     tags: 
 *       - Autenticación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login exitoso
 *       401:
 *         description: Credenciales inválidas
 */

router.post('/login', loginController);

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Registra un nuevo árbitro
 *     tags: 
 *       - Autenticación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               confirmPassword:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario creado
 *       409:
 *         description: Usuario ya existe
 */
router.post('/register', registerController);

module.exports = router;