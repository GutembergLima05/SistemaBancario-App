import './style-login.css';
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <body>
    <section class='moldura'>

        <div class='esquerda'>
          <p>
            <h1>Bem-vindo(a) de volta!</h1>
            <h2>Você pode entrar com uma conta já existente!</h2>
          </p>
  
        </div>
  
        <div class='login'>
        <h1>Fazer login</h1>
        <input type="email" placeholder="Digite seu email" />
        <input type="text" placeholder="Digite sua senha"/>
        <input  class="button" type="button" value="Entrar" />
        <br></br>
        <aside>
        <Link to={`/senha`} >Esqueceu a senha?</Link>
        <p>Não tem uma conta? <Link to={`/cadastro`}>clique aqui</Link>!!</p>
       </aside>
        </div>
  
        </section>
</body>
  );
}