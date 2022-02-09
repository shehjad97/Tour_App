const express = require('express')
const Services = require('../controller/Services.controller')
const route = express.Router()

route.post('/create-one', Services.postServices)
route.get('/', Services.getServices)
route.get('/search-services', Services.searchServices)
route.get('/:id', Services.getAService)

module.exports = route