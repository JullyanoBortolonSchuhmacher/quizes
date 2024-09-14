import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import './cadastro.css'

export function Cadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const onSubmit = () => {
    const dados = {
      nome: watch("nome"),
      dataNascimento: watch("dataNascimento"),
      email: watch("email"),
      senha: watch("senha"),
      aceitoTermos: watch("aceitoTermos")
    };
    console.log(dados);
  };

  const aceitoTermos = watch("aceitoTermos");


  return (
    <div className="cadastro--container">
      <h2>Cadastre-se</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="cadastro--perguntas">
        {/* Nome */}
        <div>
          <input
            type="text"
            placeholder="Nome"
            id="nome"
            {...register("nome", {
              required: "O nome é obrigatório",
              minLength: {
                value: 3,
                message: "O nome deve ter no mínimo 3 caracteres",
              },
              maxLength: {
                value: 150,
                message: "O nome deve ter no máximo 150 caracteres",
              },
            })}
          />
          {errors.nome && <span className="cadastro--erros">{errors.nome.message}</span>}
        </div>

        {/* Data de Nascimento */}
        <div id="dataNasc">
          <input
            type="date"
            placeholder="Data de Nascimento"
            id="dataNascimento"
            {...register("dataNascimento", {
              required: "A data de nascimento é obrigatória",
            })}
          />
          {errors.dataNascimento && (
            <span className="cadastro--erros">{errors.dataNascimento.message}</span>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email"
            id="email"
            {...register("email", {
              required: "O email é obrigatório",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Insira um email válido",
              },
            })}
          />
          {errors.email && <span className="cadastro--erros">{errors.email.message}</span>}
        </div>

        {/* Confirmação de Email */}
        <div>
          <input
            type="email"
            placeholder="Confirmar Email"
            id="confirmacaoEmail"
            {...register("confirmacaoEmail", {
              required: "A confirmação de email é obrigatória",
              validate: (value) =>
                value === watch("email") || "Os e-mails não coincidem",
            })}
          />
          {errors.confirmacaoEmail && (
            <span className="cadastro--erros">{errors.confirmacaoEmail.message}</span>
          )}
        </div>

        {/* Senha */}
        <div>
          <input
            type="password"
            placeholder="Senha"
            id="senha"
            {...register("senha", {
              required: "A senha é obrigatória",
              minLength: {
                value: 8,
                message: "A senha deve ter no mínimo 8 caracteres",
              },
            })}
          />
          {errors.senha && <span className="cadastro--erros">{errors.senha.message}</span>}
        </div>
        
        {/* Confirmação de Senha */}
        <div>
          <input
            type="password"
            placeholder="Confirmar Senha"
            id="confirmacaoSenha"
            {...register("confirmacaoSenha", {
              required: "A confirmação de senha é obrigatória",
              validate: (value) =>
                value === watch("senha") || "As senhas não coincidem",
            })}
          />

          {errors.confirmacaoSenha && (
            <span className="cadastro--erros">{errors.confirmacaoSenha.message}</span>
          )}
        </div>

        {/* Aceite dos Termos de Uso */}
        <div>
          <label>
            <input
              type="checkbox"
              id="aceitoTermos"
              {...register("aceitoTermos", {
                required: "",
              })}
            />
            Eu aceito os termos de uso
          </label>
          {errors.aceitoTermos && <span className="cadastro--erros">{errors.aceitoTermos.message}</span>}
        </div>
      </div>
      <div className="cadastro--botoes">
        <button type="submit" disabled={!aceitoTermos}>
          Cadastrar
        </button>
        <button type="reset" to="/">
          Voltar
        </button>
      </div>
        <Link to="/login">Já possuí conta? <span className="link-visual">Entre por Aqui</span></Link>
      </form>
    </div >
  )
};

export default Cadastro