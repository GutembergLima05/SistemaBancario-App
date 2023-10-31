import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import useAuth from "../services/useAuth";

export default function Login() {
  const { autenticar } = useAuth();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    autenticar(email, senha);
  };

  return (
    <div>
      <section className='moldura'>
        <div className='esquerda'>
          <Link to={`/`}><img className='logo' src={logo} alt="Logo" /></Link>
          <div>
            <h1>Faça seu Login</h1>
            <h2>Você pode entrar com uma conta já existente!</h2>
          </div>
        </div>
        <form className='login' onSubmit={handleSubmit}>
          <input
            className="email"
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="senha"
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <input className="button" type="submit" value="Entrar" />
          <br></br>
          <aside>
            <Link to={`/senha`} >Esqueceu a senha?</Link>
            <p>Não tem uma conta? <Link to={`/cadastro`}>Clique aqui</Link>!!</p>
          </aside>
        </form>
      </section>
    </div>
  );
}
