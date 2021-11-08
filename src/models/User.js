const db = require('./../database/conections')

const getUsers =  async () => {
    const [resultado, fields] = await db('SELECT * FROM users;')
    return [resultado, fields];
}

const findUser = async (identificador, valor) => {
    const [result, fields] = await db(`SELECT * FROM users WHERE ${identificador} = ? ;`,[valor]);
    return [result, fields];
}

const deleteUser = async (id) => {
    const [result, fields] = await db(`DELETE from users WHERE id = ? ;`,[id]);
    return [result, fields];
}

module.exports = {getUsers, findUser, deleteUser}