import './menu.css'
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

export default function Menu() {
  return (
    <body>
        <nav>
          <Link to={`/`}><img class='logo' src={logo} /></Link>
        </nav>
            
            

      
    </body>
  );
}