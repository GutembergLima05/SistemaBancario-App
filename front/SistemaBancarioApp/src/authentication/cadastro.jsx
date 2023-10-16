import "./style-login.css";
import Login from "./login";
import { Link } from "react-router-dom";

export default function Cadastro() {
  return (
    <body>
      <section class="moldura">
        <div class="esquerda">
          <p>
            <h1>Faça seu cadastro agora mesmo!</h1>
            <h2>É simples e rápido !</h2>
          </p>
        </div>

        <div class="login">
          <h1>Cadastro</h1>
          <input type="email" placeholder="Digite seu email" />
          <input type="text" placeholder="Digite seu nome de usuário" />
          <input type="text" placeholder="Crie uma senha" />
          <input class="button" type="button" value="registrar-se" />
          <p>
            Já possui uma conta? <Link to={`/login`}>clique aqui</Link>!
          </p>
        </div>
      </section>
    </body>
  );
}


