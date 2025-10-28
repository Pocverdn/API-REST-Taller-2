const express = require('express');
const router = express.Router();

const { uploadProfilePic } = require('../controllers/s3Controller');
const upload = require('../../multer')

/**
 * @swagger
 * /upload/picture:
 *   post:
 *     summary: Sube una foto de perfil para el árbitro
 *     tags: [Upload]
 *     security:
 *       - bearerAuth: []
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: formData
 *         name: profilePic
 *         type: file
 *         required: true
 *         description: El archivo de imagen (JPG, PNG) a subir.
 *     responses:
 *       200:
 *         description: Imagen subida exitosamente, devuelve la URL.
 *       400:
 *         description: No se envió ningún archivo.
 *       401:
 *         description: No autorizado.
 */
router.post('/picture', upload.single('profilePic'), uploadProfilePic);

module.exports = router;