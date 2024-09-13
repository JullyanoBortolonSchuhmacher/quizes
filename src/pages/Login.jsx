import { useForm } from "react-hook-form";

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
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
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

        <button type="submit">Entrar</button>
        <a href="/cadastro">Cadastre-se</a>
      </form>
    </>
  );
}

export default Login;
