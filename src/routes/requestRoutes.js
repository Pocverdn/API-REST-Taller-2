const express = require('express');
const router = express.Router();

const { acceptController, rejectController } = require('../controllers/requestController');

/**
 * @swagger
 * /requests/{id}/accept:
 *   patch:
 *     summary: Aceptar una solicitud de partido
 *     description: El árbitro autenticado acepta una solicitud de partido que estaba 'pendiente'.
 *     tags: 
 *       - Solicitudes
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: El ID de la solicitud (RefereeRequest) a aceptar
 *     responses:
 *       200:
 *         description: Solicitud aceptada. Devuelve el objeto de la solicitud actualizada.
 *       401:
 *         description: No autorizado (token inválido o no provisto).
 *       403:
 *         description: Prohibido (no eres el dueño de esta solicitud).
 *       404:
 *         description: Solicitud no encontrada.
 */
router.patch('/:id/accept', acceptController);

/**
 * @swagger
 * /requests/{id}/reject:
 *   patch:
 *     summary: Rechazar una solicitud de partido
 *     description: El árbitro autenticado rechaza una solicitud de partido que estaba 'pendiente'.
 *     tags: 
 *       - Solicitudes
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: El ID de la solicitud (RefereeRequest) a rechazar
 *     responses:
 *       200:
 *         description: Solicitud rechazada. Devuelve el objeto de la solicitud actualizada.
 *       401:
 *         description: No autorizado.
 *       403:
 *         description: Prohibido.
 *       404:
 *         description: Solicitud no encontrada.
 */
router.patch('/:id/reject', rejectController);

module.exports = router;