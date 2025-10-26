const homeService = require('../services/homeService');

const homeController = async (req, res) => {

    try {

        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({ message: 'Error: No se proporcionó token' });
        }

        const homeData = await homeService.getHome(token);

        res.status(200).json(homeData);

    } catch(error){

        res.status(401).json({ message: error.message });

    }

}

const gameController = async (req, res) => {

    try {

        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({ message: 'Error: No se proporcionó token' });
        }

        const gameData = await homeService.getGames(token);

        res.status(200).json(gameData);

    } catch(error){

        res.status(401).json({ message: error.message });

    }

}

module.exports = {
    homeController,
    gameController
};