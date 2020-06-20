const express = require('express');
const api = express();

const apartmentsRoutes = require('./routes/apartments');
const agentsRoutes = require('./routes/agents');

api.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

api.use('/apartments', apartmentsRoutes);
api.use('/agents', agentsRoutes);

module.exports = api;
