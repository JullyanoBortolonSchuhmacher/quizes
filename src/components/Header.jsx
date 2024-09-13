import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div>
        <Link to="/cadastro">Cadastrar</Link>
        <Link to="/login">Login</Link>
      </div>
    </>
  );
}

export default Header;
