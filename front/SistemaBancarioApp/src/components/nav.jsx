import './nav.css'
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import { useState } from 'react';
import icon from '../assets/icon.png';


export default function Nav() {

  const [showElement, setShowElement] = useState(false)
  const showOrHide = () => { setShowElement(!showElement) };

  return (
    <body>
      <header className='header'>
        <div className="div-img">
          <Link to={`/`}><img className='logo' src={logo} /></Link>
        </div>
        <nav className="nav1">
          <Link to={`/sacar`}  > Sacar </Link>
          <Link to={`/transferir`}  > Transferir </Link>
          <Link to={`/extrato`}  > Extrato </Link>
          <Link to={`/deposito`}  > Deposito </Link>
        
        </nav>
        <div className="perfil">
          <div className='icone'>
            <img width="30" height="30" src={icon} alt="icon" />
            </div>
            <div className='nome-fixed'>
          <p onClick={showOrHide} className="nome">Maria Luiza Gomes</p>
          {showElement ?
            <div className='show-message'>
              <Link to={`/login`}  > Editar Perfil </Link>
              <Link to={`/login`}  > sair </Link>
            </div>
            : null}
            </div>
        </div>
      </header>

    </body>
  );
}