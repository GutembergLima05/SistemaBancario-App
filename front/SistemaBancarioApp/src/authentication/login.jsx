import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

export default function Login() {
  return (
    <body>
      <section className='moldura'>

        <div className='esquerda'>
          <Link to={`/`}><img className='logo' src={logo} /></Link>

          <p>
            <h1>Faça seu Login</h1>
            <h2>Você pode entrar com uma conta já existente!</h2>
          </p>

        </div>

        <div className='login'>
          <input className="email" type="email" placeholder="Digite seu email" />
          <input className="senha" type="text" placeholder="Digite sua senha" />
          <input className="button" type="button" value="Entrar" />
    
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