const { contas, depositos, saques, transferencias } = require('../bancodedados');

const saldoConta = async (req, res) => {
    let { numero_conta, senha_conta } = req.query;
    numero_conta = Number(numero_conta);

    if(!senha_conta || !numero_conta){
        return await res.status(404).json({ message: "O número da conta e senha não foram informados!"});
    }

    const conta = contas.find((conta) => {
        return conta.numero === numero_conta;
    });

    if(!conta){
        return await res.status(404).json({ message: "Conta não encontrada!"});
    }

    const validarSenha = contas.some((conta) => {
        return conta.numero === numero_conta && conta.usuario.senha === senha_conta
    });

    if(!validarSenha){
        return await res.status(404).json({ message: "Senha incorreta!"});
    }

    return await res.status(200).json({ saldo: conta.saldo});
}

const extratoConta = async (req, res) => {
    let { numero_conta, senha_conta } = req.query;
    numero_conta = Number(numero_conta);

    if(!senha_conta || !numero_conta){
        return await res.status(404).json({ message: "O número da conta e senha não foram informados!"});
    }

    const conta = contas.find((conta) => {
        return conta.numero === numero_conta;
    });

    if(!conta){
        return await res.status(404).json({ message: "Conta não encontrada!"});
    }

    const validarSenha = contas.some((conta) => {
        return conta.numero === numero_conta && conta.usuario.senha === senha_conta
    });

    if(!validarSenha){
        return await res.status(404).json({ message: "Senha incorreta!"});
    }
    
    const deposito = depositos.filter(deposito => {
        return Number(deposito.numero_conta) === numero_conta;
    });

    const saque = saques.filter(saque => {
        return Number(saque.numero_conta) === numero_conta;
    });

    const transferenciaEnviada = transferencias.filter(transferencia => {
        return Number(transferencia.numero_conta_origem) === numero_conta;
    });

    const transferenciaRecebida = transferencias.filter(transferencia => {
        return Number(transferencia.numero_conta_destino) === numero_conta;
    });

    return await res.status(200).json({depositos: deposito, saques: saque, transferenciasEnviadas: transferenciaEnviada, transferenciaRecebida: transferenciaRecebida});
}

module.exports = {
    saldoConta, extratoConta
}