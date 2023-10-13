const { format } = require('date-fns');
let { depositos, saques, transferencias , contas } = require('../bancodedados');

const depositarTransacao = async (req, res) => {
    const { numero_conta, valor } = req.body;

    if(!numero_conta || !valor) {
        return await res.status(400).json({ message: "O número da conta e o valor são obrigatórios!"});
    }

    if(valor <= 0) {
        return await res.status(403).json({ message: "O valor não pode ser negativo ou zero!"});
    }

    const conta = contas.find((conta) => {
        return conta.numero === Number(numero_conta);
    });

    if(!conta){
        return await res.status(404).json({ message: "Conta não encontrada!"});
    }

    const deposito = {
        data: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
        numero_conta,
        valor
    }

    conta.saldo += valor;

    depositos.push(deposito);

    return await res.status(201).json(deposito);

}

const sacarTransacao = async (req, res) => {
    const { numero_conta, valor, senha } = req.body;

    if(!numero_conta || !valor || !senha) {
        return await res.status(400).json({ message: "O número da conta, o valor e senha são obrigatórios!"});
    }

    const conta = contas.find((conta) => {
        return conta.numero === Number(numero_conta);
    });

    if(!conta){
        return await res.status(404).json({ message: "Conta não encontrada!"});
    }

    const validarSenha = contas.some((conta) => {
        return conta.numero === Number(numero_conta) && conta.usuario.senha === senha
    })
    if(!validarSenha){
        return await res.status(404).json({ message: "Senha incorreta!"});
    }

    if(conta.saldo < valor){
        return await res.status(400).json({ message: `Não foi possível, seu saldo atual é de ${conta.saldo}`});
    }

    const sacar = {
        data: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
        numero_conta,
        valor
    }

    saques.push(sacar);

    conta.saldo -= valor;

    return await res.status(201).json(sacar);
}

const transferirTransacao = async (req, res) => {
    const { numero_conta_origem, numero_conta_destino, valor, senha } = req.body;

    if(!numero_conta_origem || !numero_conta_destino || !valor || !senha) {
        return await res.status(400).json({ message: "Os números das contas, o valor e senha são obrigatórios!"});
    }

    const contaOrigem = contas.find((conta) => {
        return conta.numero === Number(numero_conta_origem);
    });

    if(!contaOrigem){
        return await res.status(404).json({ message: "Sua conta não foi encontrada!"});
    }

    const contaDestino = contas.find((conta) => {
        return conta.numero === Number(numero_conta_destino);
    });

    if(!contaDestino){
        return await res.status(404).json({ message: "Conta do destino não encontrada!"});
    }

    const validarSenha = contas.some((conta) => {
        return conta.numero === Number(numero_conta_origem) && conta.usuario.senha === senha
    })
    if(!validarSenha){
        return await res.status(404).json({ message: "Senha incorreta!"});
    }

    if(contaOrigem.saldo < valor){
        return await res.status(400).json({ message: `Não foi possível, seu saldo atual é de ${contaOrigem.saldo}`});
    }

    const transferir = {
        data: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
        numero_conta_origem,
        numero_conta_destino,
        valor
    }

    transferencias.push(transferir);

    contaOrigem.saldo -= valor;
    contaDestino.saldo += valor;

    return await res.status(201).json(transferir); 
}

module.exports = {
    depositarTransacao, sacarTransacao, transferirTransacao
}