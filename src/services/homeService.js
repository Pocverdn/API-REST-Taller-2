const axios = require('axios');
const SPRING_BOOT_API_URL = process.env.SPRING_API_URL || 'http://localhost:8080/api';

const getHome = async (token) => {

    try {

        const config = {
            headers: {
                'Authorization': token,
                'ngrok-skip-browser-warning': 'true'
            }
        };

        const response = await axios.get(`${SPRING_BOOT_API_URL}/home/`, config);

        return response.data;

    } catch(error){

        if (error.response) {
            console.error("Error desde Spring Boot:", error.response.data);

            throw new Error(error.response.data.message || 'Error al obtener el home');

        } else if (error.request) {
            console.error("No se pudo conectar a Spring Boot:", error.message);

            throw new Error('No se pudo conectar al servidor.');

        } else {
            console.error("Error:", error.message);

            throw new Error('Ocurrió un error inesperado');

        }

    }

}

const getGames = async (token) => {

    try {

        const config = {
            headers: {
                'Authorization': token
            }
        };

        const response = await axios.get(`${SPRING_BOOT_API_URL}/home/games`, config);

        return response.data;

    } catch(error){

        if (error.response) {
            console.error("Error desde Spring Boot:", error.response.data);

            throw new Error(error.response.data.message || 'Error al obtener los juegos');

        } else if (error.request) {
            console.error("No se pudo conectar a Spring Boot:", error.message);

            throw new Error('No se pudo conectar al servidor.');

        } else {
            console.error("Error:", error.message);

            throw new Error('Ocurrió un error inesperado');

        }

    }

}

module.exports = {
    getHome,
    getGames
};