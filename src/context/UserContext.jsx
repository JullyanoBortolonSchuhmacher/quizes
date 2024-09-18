import { useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";
import { apiUrl } from '../config';
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [isLogado, setIsLogado] = useState(false);
  const [userData, setUserData] = useState(null);

  // cria
  async function cadastroUsuario(user) {
    try {
      const response = await axios.post(`${apiUrl}/usuarios`, user);
      setUsers([...users, response.data]);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
    }
  };

  // deleta
  async function deleteUsuario(userId) {
    try {
      const response = await axios.delete(`${apiUrl}/usuarios/${userId}`);
      setUsers(users.filter(user => user.id !== userId));
      if (userData && userData.id === userId) {
        setUserData(null);
      }
    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
    }
  };

  // lista com o id
  async function listaUsuarioPorID(userId) {
    try {
      const response = await axios.get(`${apiUrl}/usuarios/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar usuário:', error.message);
      throw error;
    }
  };
  
  // lista todos
  async function listaUsuarios() {
    try {
      const response = await axios.get(`${apiUrl}/usuarios`);
      setUsers(response.data);
    } catch (error) {
      console.error('Erro ao listar usuários:', error.message);
      throw error;
    }
  };

  async function login(email, senha) {
    try {
      const response = await fetch(`${apiUrl}/usuarios`);
      const users = await response.json();
      const user = users.find(user => user.email === email && user.senha === senha);
      if (user) {
        localStorage.setItem('userId', user.id.toString());
        setIsLogado(true);
        setUserData(user);
        return user;
      } else {
        setIsLogado(false);
        throw new Error("E-mail ou senha estão errados");
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  function logout() {
    setUser(null);
    setIsLogado(false);
    setUserData(null);
    localStorage.removeItem("userId");
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      listaUsuarioPorID(userId).then(user => {
        setUser(user);
        setUserData(user);
      });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, users, isLogado, userData, login, logout, cadastroUsuario, deleteUsuario, listaUsuarios }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
