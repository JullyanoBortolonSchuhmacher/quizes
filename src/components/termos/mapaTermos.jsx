import { useState, useEffect } from "react";
import termosJson from "./termos.json";
import "./termos.css";

const TermosDeUso = () => {
  const [termos, setTermos] = useState([]);
  const [conclusao, setConclucao] = useState("");

  useEffect(() => {
    setTermos(termosJson.termos);
    setConclucao(termosJson.conclusao);
  }, []);

  return (
    <div className="termos--container">
      {termos.map((termo, index) => (
        <div className="termos--content" key={index}>
          <h2>{termo.titulo}</h2>
          <ul>
            {termo.itens.map((item, itemIndex) => (
              <ol key={itemIndex}>{item}</ol>
            ))}
          </ul>
          <br />
        </div>
      ))}
      <span id="conc">{conclusao}</span>
    </div>
  );
};

export default TermosDeUso;
