import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="login--container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="login--form">
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
          {errors.email && <span>{errors.email.message}</span>}

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
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div className="login--botoes">
          <button type="submit">Entrar</button>
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
