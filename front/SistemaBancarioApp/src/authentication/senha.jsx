import { Link } from 'react-router-dom';
import './style-login.css';

export default function Senha() {
  return (
    <body>
    <section class='moldura'>

        <div class='esquerda'>
          <p>
            <h1>Não se preocupe! Redefinir a senha é fácil!</h1>
            <h2>Você receberá um email de confirmação.</h2>
          </p>
  
        </div>
  
        <div class='login'>
        <h1>Recuperar senha</h1>
        <input type="email" placeholder="Digite seu email" />
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