const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Taller 2',
            version: '1.0.0',
            description: 'API REST bien chimbita que consume la API de Spring Boot y la expone para los árbitros.',
        },
        servers: [
            {
                url: 'http://localhost:3000/api/v1',
                description: 'Servidor de Desarrollo'
            }
        ],

        // Estos son los componentes que use para el sistema de autentificación (Que dolor de huevas)

        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                }
            }
        },
        security: [
            {
                bearerAuth: []
            }
        ]
    },

    apis: ['./src/routes/*.js'],
};

const specs = swaggerJsdoc(options);

const setupSwagger = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};

module.exports = { setupSwagger };