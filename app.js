require('dotenv').config();
const express = require('express');
const ngrok = require('ngrok');
const routes = require('./src/routes/routes');

const { setupSwagger } = require('./swagger');

function createApp () {

  const app = express ();
  app.use(express.json());

  const PORT = process.env.PORT || 3000;

  app.use('/api/v1', routes);

  setupSwagger(app);

  app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
  });

}

createApp();