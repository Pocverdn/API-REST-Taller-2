const s3Service = require('../services/s3Service');

const uploadProfilePic = async (req, res) => {
    try {

        if (!req.file) {
            return res.status(400).json({ message: 'No se subió ningún archivo.' });
        }

        const fileBuffer = req.file.buffer;
        const fileName = req.file.originalname;
        const mimetype = req.file.mimetype;

        const fileUrl = await s3Service.uploadFile(fileBuffer, fileName, mimetype);

        res.status(200).json({
            message: '¡Imagen subida exitosamente!',
            url: fileUrl
        });

    } catch (error) {
        // Manejamos el error (ej. si no es una imagen)
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    uploadProfilePic
};