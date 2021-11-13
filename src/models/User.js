const db = require('./../database/conections')

const getUsers =  async () => {
    const [resultado, fields] = await db('SELECT * FROM users;')
    return [resultado, fields];
}

const findUser = async (id, valor) => {
    const [result, fields] = await db(`SELECT * FROM users WHERE ${id} = ? ;`,[valor]);
    return [result, fields];
}

const deleteUser = async (id) => {
    const [result, fields] = await db(`DELETE from users WHERE id = ? ;`,[id]);
    return [result, fields];
}

// const updateUser = async (id)  =>{
    
//     let sql = `UPDATE users SET (name,email,pass) values(?,?,?) WHERE id = ?`;

    




// }

module.exports = {getUsers, findUser, deleteUser}