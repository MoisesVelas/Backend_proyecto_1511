const bcrypt = require('bcrypt');//importando la libreria de encriptacion

//generadora de passwords codificados
const hashearPassword = async (pass) => {
    const salt = await bcrypt.genSalt()
    return await  bcrypt.hash(pass, salt)
}

module.exports = hashearPassword;