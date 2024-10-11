const express = require('express')

const Controllerapi = require("../controllers/api")
const router = express.Router();


router.post('/api/somar', Controllerapi.Somar)
router.post('/api/sub', Controllerapi.Sub)

module.exports = router

// service recebe em /exercicio1 - /somar 