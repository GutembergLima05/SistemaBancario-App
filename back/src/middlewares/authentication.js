const jwt = require("jsonwebtoken");
const senhaJwt = require("../senhaJwt");
const { contas } = require('../bancodedados')

const verificarUsuarioLogado = async (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({ message: "Não autorizado!" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { id } = jwt.verify(token, senhaJwt);

    const conta = contas.find((conta) => {
        return conta.numero === id
    })

    if(!conta){
        return res.status(401).json({ message: "Não autorizado!" });
    }

    req.usuario = conta

    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

module.exports = verificarUsuarioLogado;