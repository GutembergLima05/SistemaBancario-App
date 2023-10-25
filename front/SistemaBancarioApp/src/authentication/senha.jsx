import { Link } from 'react-router-dom';
import './style-login.css';
import logo from '../assets/logo.png'

export default function Senha() {
  return (
    <body>
    <section className='moldura'>

        <div className='esquerda'>
        <Link to={`/`}><img className='logo' src={logo} /></Link>
          <p>
            <h1>Recupere a senha</h1>
            <h2>Você receberá um email de confirmação.</h2>
          </p>
  
        </div>
  
        <div className='login'>
        <input className="email" type="email" placeholder="Digite seu email" />
        <input  className="button" type="button" value="Recuperar senha" />
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