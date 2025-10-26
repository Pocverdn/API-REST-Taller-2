const requestService = require('../services/requestService');

const acceptController = async (req, res) => {

    const { id } = req.params;

    try {
    
            const token = req.headers.authorization;
    
            if (!token) {
                return res.status(401).json({ message: 'Error: No se proporcionó token' });
            }
    
            const acceptData = await requestService.acceptGame(id, token);
    
            res.status(200).json(acceptData);
    
        } catch(error){
    
            res.status(401).json({ message: error.message });
    
        }
}

const rejectController = async (req, res) => {

    const { id } = req.params;

    try {
    
            const token = req.headers.authorization;
    
            if (!token) {
                return res.status(401).json({ message: 'Error: No se proporcionó token' });
            }
    
            const rejectData = await requestService.rejectGame(id, token);
    
            res.status(200).json(rejectData);
    
        } catch(error){
    
            res.status(401).json({ message: error.message });
    
        }
}

module.exports = {
    acceptController,
    rejectController
};