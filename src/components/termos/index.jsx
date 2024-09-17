import { useState } from "react";
import PropTypes from "prop-types";
import Termos from "./mapaTermos.jsx";
import "./termos.css";

const TermosDeUso = ({ aceito }) => {
  const [ativo, setAtivo] = useState(false);

  const handleToggle = () => {
    setAtivo(!ativo);
  };

  return (
    <div className="termos--container">
      <div className="termos--titulo" onClick={handleToggle}>
        <i className={`termos--icone ${ativo ? "ativo" : ""}`}>+</i>
        Termos de Uso
      </div>
      <div className={`termos--conteudo ${ativo ? "ativo" : ""}`}>
        <Termos />
        <div className="termos--checkbox-container">
          <input type="checkbox" checked={aceito} readOnly />
          <label>Aceito os termos de uso</label>
        </div>
      </div>
    </div>
  );
};

TermosDeUso.propTypes = {
  aceito: PropTypes.bool,
};

TermosDeUso.defaultProps = {
  aceito: false,
};

export default TermosDeUso;
