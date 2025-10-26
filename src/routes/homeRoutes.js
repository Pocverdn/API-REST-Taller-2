const express = require('express');
const router = express.Router();

const { homeController, gameController } = require('../controllers/homeController');

/**
 * @swagger
 * /home/:
 *   get:
 *     summary: Obtiene el dashboard principal del árbitro
 *     description: Devuelve el perfil y las solicitudes (partidos, asignaciones) del árbitro autenticado.
 *     tags: 
 *       - Árbitro
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Datos del dashboard (perfil, solicitudes)
 *       401:
 *         description: No autorizado (token inválido o no provisto)
 *       404:
 *         description: El usuario no tiene un perfil de árbitro
 */
router.get('/', homeController);

/**
 * @swagger
 * /home/games:
 *   get:
 *     summary: Obtiene la lista de juegos asignados al árbitro
 *     description: Devuelve una lista de todos los juegos (Game) asignados al árbitro autenticado.
 *     tags: 
 *       - Árbitro
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Un array de objetos de tipo Game
 *       401:
 *         description: No autorizado
 *       404:
 *         description: El usuario no tiene un perfil de árbitro
 */
router.get('/games', gameController);

module.exports = router;