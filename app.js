const express = require('express');
const app = express();
const helloController = require('./controllers/helloController');

app.get('/', helloController.handleRequest);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor Layered escuchando en puerto ${PORT}`));
