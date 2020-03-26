const express = require('express');
const crypto = require('crypto');
const routes = express.Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
//app.get('/users', (request, response) => {
//no Browser http://localhost:3333/users?name=Daniel
//routes.post('/ongs', async (request, response) => {
routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

routes.get('/profile', ProfileController.index);

routes.post('/sessions', SessionController.create);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);
// para exportar
module.exports = routes;
