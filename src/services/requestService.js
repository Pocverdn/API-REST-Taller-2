const axios = require('axios');
const SPRING_BOOT_API_URL = process.env.SPRING_API_URL || 'http://localhost:8080/api';

const acceptGame = async (id, token) => {

    try {
    
        const config = {
            headers: {
                'Authorization': token,
                'ngrok-skip-browser-warning': 'true'
            }
        };

        const response = await axios.patch(`${SPRING_BOOT_API_URL}/requests/${id}/accept`, null, config);

        return response.data;

    } catch(error){
        
        throw new Error(error.response.data.message || 'Error al aceptar');

    }


};


const rejectGame = async (id, token) => {

    try {
    
        const config = {
            headers: {
                'Authorization': token
            }
        };

        const response = await axios.patch(`${SPRING_BOOT_API_URL}/requests/${id}/reject`, null, config);

        return response.data;

    } catch(error){
        
        throw new Error(error.response.data.message || 'Error al rechazar');

    }


};

module.exports = {
    acceptGame,
    rejectGame
};