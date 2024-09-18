import { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";

const cadastroMiddleware = async (dados, cadastroUsuario) => {
  try {
    await cadastroUsuario(dados);
  } catch (error) {
    console.error(error);
  }
};

export default cadastroMiddleware;