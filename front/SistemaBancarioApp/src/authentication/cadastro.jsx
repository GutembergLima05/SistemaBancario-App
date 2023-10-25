import "./style-login.css";
import Login from "./login";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

export default function Cadastro() {
  return (
    <body>
      <section class="moldura">
        <div class="esquerda">
        <Link to={`/`}><img class='logo' src={logo} /></Link>
          <p>
            <h1>Faça seu cadastro agora mesmo!</h1>
            <h2>É simples e rápido !</h2>
          </p>
        </div>

        <div class="login">
          <input class="email" type="email" placeholder="Digite seu email" />
          <input class="email" type="text" placeholder="Digite seu nome de usuário" />
          <input class="senha" type="text" placeholder="Crie uma senha" />
          <input class="button" type="button" value="registrar-se" />
          <p>
            Já possui uma conta? <Link to={`/login`}>clique aqui</Link>!
          </p>
        </div>
      </section>
    </body>
  );
}


