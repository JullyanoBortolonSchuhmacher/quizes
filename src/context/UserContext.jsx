import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { URL_DA_API } from '../config.js';

export const UsuariosContext = createContext();

export const UserProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const buscarUsuarios = async () => {
      setCarregando(true);
      try {
        const resposta = await axios.get(URL_DA_API + '/usuarios');
        setUsuarios(resposta.data);
      } catch (err) {
        setErro(err.message);
      } finally {
        setCarregando(false);
      }
    };
    buscarUsuarios();
  }, []);

  const cadastrarUsuario = async (novoUsuario) => {
    try {
      const resposta = await axios.post(URL_DA_API + '/usuarios', novoUsuario);
      setUsuarios([...usuarios, resposta.data]);
    } catch (err) {
      setErro(err.message);
    }
  };

  const atualizarUsuario = async (usuarioAtualizado) => {
    try {
      await axios.put(URL_DA_API + `/usuarios/${usuarioAtualizado.id}`, usuarioAtualizado);
      setUsuarios(usuarios.map(usuario => (usuario.id === usuarioAtualizado.id ? usuarioAtualizado : usuario)));
    } catch (err) {
      setErro(err.message);
    }
  };

  const deletarUsuario = async (idUsuario) => {
    try {
      await axios.delete(URL_DA_API + `/usuarios/${idUsuario}`);
      setUsuarios(usuarios.filter(usuario => usuario.id !== idUsuario));
    } catch (err) {
      setErro(err.message);
    }
  };

  const fazerLogin = async (email, password) => {
    try {
      const response = await axios.post(URL_DA_API + '/usuarios', { email, password }); 
      const { user } = response.data;
      localStorage.setItem("logado", true)
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <UsuariosContext.Provider value={{
      usuarios,
      carregando,
      erro,
      cadastrarUsuario,
      atualizarUsuario,
      deletarUsuario,
      fazerLogin
    }}>
      {children}
    </UsuariosContext.Provider>
  );
};

export default UserProvider

export const useUsers = () => {
  return useContext(UsuariosContext);
};