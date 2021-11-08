
const express = require('express')

const router = express.Router()



router.get('/',(request,response) =>{response.json({ruta: '/hola como estas'})

});







module.exports = router