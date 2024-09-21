import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { useUsers } from '../../context/UserContext.jsx'
import TermosDeUso from "../../components/termos/index.jsx";
import "./cadastro.css";

function Cadastro() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { cadastrarUsuario } = useUsers();
  const navigate = useNavigate();


  const onSubmit = async (data) => {
    const dados = {
      nome: data.nome,
      email: data.email,
      senha: data.senha,
    };
    try {
      await cadastrarUsuario(dados);
      console.log('Usuário cadastrado com sucesso!');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
    }
  };


  const [aceitoTermos, setAceitoTermos] = useState(false);
  
  const handleAceitoChange = (aceito) => {
    setAceitoTermos(aceito);
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
                }
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
          <TermosDeUso aceito={aceitoTermos} onAceitoChange={handleAceitoChange} />
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
