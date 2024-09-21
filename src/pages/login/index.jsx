import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./login.css";
import { useUsers } from "../../context/UserContext";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [erroLogin, setErroLogin] = useState("");
  const { fazerLogin } = useUsers();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setErroLogin("");
    try {
      await fazerLogin(data.email, data.password);
    } catch (error) {
      setErroLogin("Email ou senha inválidos");
      console.error(error);
    }
  };

  return (
    <div className="login--container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="login--form">
          <h2>login</h2>
          <input
            type="email"
            placeholder="E-mail"
            id="email"
            {...register("email", {
              required: "O email é obrigatório",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Insira um email válido",
              },
            })}
          />
          {errors.email && (
            <span className="cadastro--erros">{errors.email.message}</span>
          )}

          <input
            type="password"
            placeholder="senha"
            id="password"
            {...register("password", {
              required: "A senha é obrigatória",
              minLength: {
                value: 6,
                message: "A senha deve ter pelo menos 6 caracteres",
              },
            })}
          />
          {errors.password && (
            <span className="cadastro--erros">{errors.password.message}</span>
          )}
        </div>
        <div className="login--botoes">
          <button type="submit">Entrar</button>
          {erroLogin && <span className="cadastro--erros">{erroLogin}</span>}
          <span>
            Não possuí conta?{" "}
            <Link to="/cadastro" className="link-visual">
              Cadastre-se aqui
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Login;
