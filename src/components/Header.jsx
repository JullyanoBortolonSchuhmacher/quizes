import { Link } from "react-router-dom";
import './Header.css'

export function Header() {
  return (
    <>
      <header> 
        <nav id="header">
          <Link to="/">Home</Link>
          <select id="selcTema">
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
          <div>
            <Link to="/cadastro">Cadastrar</Link>
            <Link to="/login">Login</Link>
          </div>
        </nav>
      </header>
    </>
  );
};
