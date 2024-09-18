import { useState } from "react";
import PropTypes from "prop-types";
import Termos from "./mapaTermos.jsx";
import "./termos.css";

const TermosDeUso = ({ aceito = false, onAceitoChange }) => {
  const [ativo, setAtivo] = useState(false);

  const handleToggle = () => {
    setAtivo(!ativo);
    onAceitoChange(!ativo);
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
        <input
          required
          type="checkbox"
          defaultChecked={ativo}
          onChange={(e) => setAtivo(e.target.checked)}
        />
          <label>Aceito os termos de uso</label>
        </div>
      </div>
    </div>
  );
};

TermosDeUso.propTypes = {
  aceito: PropTypes.bool,
  onAceitoChange: PropTypes.func.isRequired,
};

export default TermosDeUso;