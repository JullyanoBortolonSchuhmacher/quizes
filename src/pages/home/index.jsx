import QRCode from "../../components/QrCode";
function Home() {
  const numRotinas = localStorage.getItem("nRotinas")
    ? parseInt(localStorage.getItem("nRotinas"), 10)
    : 0;

  const oioi = localStorage.setItem("nRotinas", -12345); //vai sumir depois é apenas para teste
  oioi;
  return (
    <div className="container">
      <h1>Crie seu Quiz Personalizado!</h1>
      <p>
        Organize suas perguntas e crie uma sala personalizada. Para se divertir
      </p>

      <div className="contador-rotinas">
        <span>Quizes já criados: {numRotinas}</span>
      </div>
      <QRCode />
    </div>
  );
}

export default Home;
