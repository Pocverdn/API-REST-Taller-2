const axios = require('axios');

const SPRING_URL = process.env.SPRING_API_URL || 'http://localhost:8080/api';

const login = async (username, password) => {
    try {
        const response = await axios.post(`${SPRING_URL}/auth/login`, {
            username: username,
            password: password
        });
        
        return response.data;
        
    } catch (error) {
        if (error.response) {

            throw new Error(error.response.data.message || 'Error al validar credenciales');
            
        } else if (error.request) {

            throw new Error('No se pudo conectar al servidor.');
            
        } else {

            throw new Error('Ocurrió un error inesperado al intentar loguear');
        }
    }
};

const register = async (username, password, confirmPassword) => {

    try {

        const response = await axios.post(`${SPRING_URL}/auth/register`, {
            username: username,
            password: password,
            confirmPassword: confirmPassword
        });
        
        return response.data;


    } catch(error) {

        if (error.response) {

            throw new Error(error.response.data.message || 'Error al registrar usuario');

        } else if (error.request) {

            throw new Error('No se pudo conectar al servidor de autenticación.');

        } else {

            throw new Error('Ocurrió un error inesperado al registrar');
            
        }


    }


}

module.exports = {
    login,
    register
};