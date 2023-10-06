const validarSenha =  async (req, res , next) => {
    const { senha } = req.query;

    if(!senha){
        return await res.status(404).json({ message: "A senha do banco não informada!"});
    }

    if(senha !== 'Cubos123Bank'){
        return await res.status(404).json({ message: "A senha do banco informada é inválida!"});
    }

    next();
}

module.exports = {
    validarSenha
}