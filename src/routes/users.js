

const router = require('express').Router()

const conn = require('../database/conections')

const bcrypt = require('bcrypt');//importando la libreria de encriptacion

const {getUsers, findUser, deleteUser} = require('./../models/User')

const hashearPassword = require('./../helpers/hasher')


// listado de usuarios  OK
router.get('/users' , async (req, res) => {
    let users = await  getUsers()
    res.json(users[0] );
})

// obtener usuario segun id  OK
router.get('/users/:id',async (req, res) => {
    const user = await findUser('id', req.params.id)
    res.json({user:user[0]})
});


//crear usuario


router.post('/users' ,  async (req, res) => {
    let name  = req.body.name;
    let email = req.body.email
    let pass = req.body.pass

    if (!pass.lenght > 8) {
        res.json({error: 'Password muy corto'})
    }

    const hashed_pass =  await hashearPassword(pass)    

    const [result, cfieldds]  = await  conn(`INSERT into users (name, email,password) values(?,?,?)`, [name, email, hashed_pass])

    res.json(result)
           
});


router.delete('/users/:id',async (req, res) => {

    try {
        const result = deleteUser(req.params.id)        
        res.status(204).json(result)
    } catch (error) {
        
    }   
})




//-------------UPDATE USERS 
router.patch('/users/:id', async (req, res) => {

    let id = req.params.id

    let {name,email,pass} = req.body

    const hashed_pass =  await hashearPassword(pass) 

    let sql = `UPDATE users SET name = ${name}  WHERE id = ${id}`;


    const [result, fields] =  await conn(sql,[name, email, hashed_pass])

    res.json(result)

    


});



module.exports = router