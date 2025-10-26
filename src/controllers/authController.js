const authService = require('../services/authService');

const loginController = async (req, res) => {

    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ 
            message: 'Error: Username y password son requeridos' 
        });
    }

    try {

        const data = await authService.login(username, password);
        
        res.status(200).json(data);

    } catch (error) {

        res.status(401).json({ 
            message: error.message 
        });
    }
};

const registerController = async (req, res) => {

    const { username, password, confirmPassword} = req.body;

    if (!username || !password || !confirmPassword) {
        return res.status(400).json({ 
            message: 'Error: Todos los campos (username, password, confirmPassword) son requeridos' 
        });
    }

    try {

        const data = await authService.register(username, password, confirmPassword);
        
        res.status(201).json(data);


    } catch(error) {

        res.status(409).json({ 
            message: error.message 
        });


    }


}

module.exports = {
    loginController,
    registerController
};