import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import "./cadastro.css";
import TermosDeUso from "../../components/termos/index.jsx";

export function Cadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const aceitoTermos = false;

  const onSubmit = () => {
    const dados = {
      nome: watch("nome"),
      email: watch("email"),
      senha: watch("senha"),
      aceitoTermos: aceitoTermos,
    };
    console.log(dados);
  };

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
            {errors.nome && (
              <span className="cadastro--erros">{errors.nome.message}</span>
            )}
          </div>

          <div className="cadastro--emails">
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
              {errors.email && (
                <span className="cadastro--erros">{errors.email.message}</span>
              )}
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
                <span className="cadastro--erros">
                  {errors.confirmacaoEmail.message}
                </span>
              )}
            </div>
          </div>

          <div className="cadastro--senhas">
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
              {errors.senha && (
                <span className="cadastro--erros">{errors.senha.message}</span>
              )}
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
                <span className="cadastro--erros">
                  {errors.confirmacaoSenha.message}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="termosDeUso">
          <TermosDeUso aceito={aceitoTermos} />
        </div>
        <div className="cadastro--botoes">
          <button
            type="submit"
            id="cadastro--cadastrar"
            disabled={!aceitoTermos}
          >
            Cadastrar
          </button>
          <Link to="/">
            <button type="reset">Voltar</button>
          </Link>
        </div>
        <Link to="/login">
          Já possuí conta? <span className="link-visual">Entre por Aqui</span>
        </Link>
      </form>
    </div>
  );
}

export default Cadastro;
