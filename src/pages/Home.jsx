function Home() {
  const numRotinas = localStorage.getItem("nRotinas")
    ? parseInt(localStorage.getItem("nRotinas"), 10)
    : 0;

  const definindoNumeroDeRotinasParaTeste = localStorage.setItem(
    "nRotinas",
    -12345,
  ); //vai sumir depois é apenas para teste

  return (
    <div className="container">
      <h1>Crie suas Rotinas Diárias</h1>
      <p>
        Organize seu dia e alcance seus objetivos com rotinas personalizadas.
      </p>

      <div className="contador-rotinas">
        <span>Rotinas criadas: {numRotinas}</span>
      </div>
    </div>
  );
}

export default Home;
