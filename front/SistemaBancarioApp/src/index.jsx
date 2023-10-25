import { Link } from "react-router-dom";
import logo from './assets/logo.png';
import image from './assets/image.png'
import image2 from './assets/image2.png'

export default function Index() {
  return (
    <body>
      <header className='header'>
        <div className="div-img">
          <Link to={`/`}><img className='logo' src={logo} /></Link>
        </div>
        <nav className="nav1">
          <Link to={`/login`} > Entrar </Link>
          <Link to={`/login`} > Entrar </Link>
          <Link to={`/login`} > Entrar </Link>
          <Link to={`/login`} > Entrar </Link>
          <Link to={`/login`} > Entrar </Link>
        </nav>
        <div className="div-botao">
          <Link to={`/login`} className="botao1" >
            Entrar
          </Link>
          <Link to={`/cadastro`} className="botao2">
            Cadastro
          </Link>
        </div>
      </header>
      <div className="capa">
        <h1>Projeto Sistema Bancário</h1>
        <p>
          Este projeto foi dedicado para a construção de um Sistema Bancário,
          cujo será utilizado com todas as funcionalidades que um banco possui,
          sendo: Listar Contas, Criar Conta, Atualizar Conta, Deletar Conta,
          Depositar, Sacar, Transferir, Saldo da Conta, Extrato da Conta.
        </p>
      </div>
      <div className="seção">
        <div className="text">
          <h1>teste</h1>
          <p>
            Friends was a American comedy television show that ran from September
            22, 1994 to May 6 ,2004.
            <br></br>
            It is about 6 friends who aved in Manhattan, New York City. They were in
            their 20s and 30s.
          </p>
          <p>The names of the "friends" were:</p>
        </div>
        <div>
          <img src={image} alt="image" width='600px' />
        </div>
      </div>
      <div className="seção2">
        <div>
          <img src={image2} alt="image2" width='550px' />
        </div>
        <div className="text">
          <h1>teste</h1>
          <p>
            Friends was a American comedy television show that ran from September
            22, 1994 to May 6 ,2004.
            <br></br>
            It is about 6 friends who aved in Manhattan, New York City. They were in
            their 20s and 30s.
          </p>
          <p>The names of the "friends" were:</p>
        </div>
      </div>
      <div className="seção">
          
      </div>
      <div className="seção2">
        <div>
        </div>
        <div className="text">
          <h1>teste</h1>
          <p>
            Friends was a American comedy television show that ran from September
            22, 1994 to May 6 ,2004.
            <br></br>
            It is about 6 friends who aved in Manhattan, New York City. They were in
            their 20s and 30s.
          </p>
          <p>The names of the "friends" were:</p>
        </div>
        </div>
      
    </body>
  );
}
