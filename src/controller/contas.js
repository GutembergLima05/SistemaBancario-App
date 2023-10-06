let { contas, identificadorConta } = require('../bancodedados');


const listarContas = async (req, res) => {

    if(!contas) {
        return await res.status(404).json({ message: "Nenhuma conta encontrada!"})
    }

    return await res.status(200).json(contas)
}

const criarConta = async (req, res) => {
    const { nome,cpf,data_nascimento,telefone,email,senha } = req.body

    if(!nome || !cpf || !data_nascimento || !telefone || !email || !senha){
        return await res.status(400).json({ message: "Verificar se todos os campos foram informados (todos são obrigatórios)"})
    }

    const validarContaEmail = contas.find((validarContaEmail) => {
        return  validarContaEmail.usuario.email === email;
    });

    const validarContaCpf = contas.find((validarContaCpf) => {
        return validarContaCpf.usuario.cpf === cpf;
    })

    if(validarContaCpf){
        return await res.status(401).json({ message: "Já existe uma conta com o cpf ou e-mail e informado!"})
    }
    if(validarContaEmail){
        return await res.status(401).json({ message: "Já existe uma conta com o cpf ou e-mail e informado!"})
    }

    const conta = {
        numero: identificadorConta++,
        saldo: 0,
        usuario: {
           nome,
           cpf,
           data_nascimento,
           telefone,
           email,
           senha
        }
    }

    contas.push(conta);

    return await res.status(201).json();
}

const atualizarConta = async (req, res) => {
    const { id } = req.params;
    const { nome,cpf,data_nascimento,telefone,email,senha } = req.body;

    if(!nome || !email || !cpf || !data_nascimento || !telefone || !senha) {
        return await res.status(400).json({ message: "Informe todos os campos!"});
    }

    const conta = contas.find((conta) => {
        return conta.numero === Number(id);
    })

    if(!conta){
        return await res.status(404).json({ message: "Conta não encontrada!"});
    }

    const validarContaEmail = contas.find((validarContaEmail) => {
        return  validarContaEmail.usuario.email === email;
    });

    const validarContaCpf = contas.find((validarContaCpf) => {
        return validarContaCpf.usuario.cpf === cpf;
    })

    if(validarContaCpf){
        return await res.status(401).json({ message: "Já existe uma conta com o cpf ou e-mail e informado!"})
    }
    if(validarContaEmail){
        return await res.status(401).json({ message: "Já existe uma conta com o cpf ou e-mail e informado!"})
    }

    conta.usuario.nome = nome
    conta.usuario.cpf = cpf
    conta.usuario.data_nascimento = data_nascimento
    conta.usuario.email = email
    conta.usuario.senha = senha
    conta.usuario.telefone = telefone

    return await res.status(203).json();
}

const deletarConta = async (req, res) => {
    const { id } = req.params;

    const conta = contas.find((conta) => {
        return conta.numero === Number(id);
    })

    if(!conta){
        return await res.status(404).json({ message: "Conta não encontrada!"});
    }

    if(conta.saldo > 0) {
        return await res.status(400).json({ message: "A conta só pode ser removida se o saldo for zero!"})
    }

    contas = contas.filter((conta) => {
        return conta.numero !== Number(id);
    });

    return res.status(204).json();
}

module.exports = {
    listarContas, criarConta, atualizarConta, deletarConta
}