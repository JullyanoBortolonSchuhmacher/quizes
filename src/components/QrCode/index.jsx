const urlAtual = window.location.href;
let tamanhoX = 100;
let tamanhoY = 100;

function CodigoQR() {
  const url = `https://api.qrserver.com/v1/create-qr-code/?size${tamanhoX}x${tamanhoY}&data=${urlAtual}`;
  return (
    <>
      <img src={url} alt="lorem" />
    </>
  );
}

export default CodigoQR;
