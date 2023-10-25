import "./style-login.css";
import Login from "./login";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

export default function Cadastro() {
  return (
    <body>
      <section className="moldura">
        <div className="esquerda">
        <Link to={`/`}><img className='logo' src={logo} /></Link>
          <p>
            <h1>Faça seu cadastro agora mesmo!</h1>
            <h2>É simples e rápido !</h2>
          </p>
        </div>

        <div className="login">
          <input className="email" type="email" placeholder="Digite seu email" />
          <input className="email" type="text" placeholder="Digite seu nome de usuário" />
          <input className="senha" type="text" placeholder="Crie uma senha" />
          <input className="button" type="button" value="registrar-se" />
          <p>
            Já possui uma conta? <Link to={`/login`}>clique aqui</Link>!
          </p>
        </div>
      </section>
    </body>
  );
}


