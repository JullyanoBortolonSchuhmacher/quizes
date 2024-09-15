import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <>
      <header>
        <nav id="header">
          <Link to="/">Home</Link>
          <input type="checkbox" id="chkTema" />
          <label htmlFor="chkTema" id="btnTema">
            <span id="iconeTema"></span>
          </label>
          <div>
            <Link to="/cadastro">Cadastrar</Link>
            <Link to="/login">Login</Link>
          </div>
        </nav>
      </header>
    </>
  );
}
