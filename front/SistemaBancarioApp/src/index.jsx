import { Link } from "react-router-dom";


export default function Index() {
  return (
    <body>
      <div class="header">
        <div class="div-img">
          <img src="./assets/fundo2.png" alt="" width="50px"></img>
        </div>
        <nav class="nav1">
          <a href="">Home</a>
          <a href="">teste</a>
          <a href="">teste</a>
          <a href="">teste</a>
          <a href="">teste</a>
        </nav>
        <div class="div-botao">
          <Link to={`/login`} class="botao1" >
            Entrar
          </Link>
          <Link to={`/cadastro`} class="botao2">
            Cadastro
          </Link>
        </div>
      </div>
      <div class="capa">
        <h1>testando testando</h1>
        <p>
          {" "}
          ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
          pppppppppppppppppppppppppppppppppppppppppppppppppppppppp
        </p>
      </div>
      <h1>teste</h1>
      <p>
        Friends was a American comedy television show that ran from September
        22, 1994 to May 6 ,2004.
        <br></br>
        It is about 6 friends who aved in Manhattan, New York City. They were in
        their 20s and 30s.
      </p>
      <p>The names of the "friends" were:</p>

      <a href="https://pt.wikipedia.org/wiki/Friends" target="_blank">
        Friends
      </a>
    </body>
  );
}
