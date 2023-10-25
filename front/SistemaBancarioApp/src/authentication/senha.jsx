import { Link } from 'react-router-dom';
import './style-login.css';
import logo from '../assets/logo.png'

export default function Senha() {
  return (
    <body>
    <section class='moldura'>

        <div class='esquerda'>
        <Link to={`/`}><img class='logo' src={logo} /></Link>
          <p>
            <h1>Recupere a senha</h1>
            <h2>Você receberá um email de confirmação.</h2>
          </p>
  
        </div>
  
        <div class='login'>
        <input class="email" type="email" placeholder="Digite seu email" />
        <input  class="button" type="button" value="Recuperar senha" />
        <br></br>
        <aside>
        <p>Não tem uma conta? <Link to={`/cadastro`}>Quero me cadastrar</Link>!</p>
        <p>Já possui uma conta? <Link to={`/login`}>Clique aqui</Link>!</p>
       </aside>
        </div>
  
        </section>
</body>
  );
}