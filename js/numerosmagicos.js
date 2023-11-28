let numeroMagico;

function comenzarJuego() {
  // Generar un número aleatorio entre 1 y 100
  numeroMagico = Math.floor(Math.random() * 100) + 1;

  // Mostrar la sección del juego
  document.getElementById('juego').style.display = 'block';
}

function verificarNumero() {
  // Obtener el número ingresado por el usuario
  const numeroUsuario = parseInt(document.getElementById('numeroInput').value);

  // Verificar si el número es correcto
  if (numeroUsuario === numeroMagico) {
    alert('¡Felicidades! Has adivinado el número.');
    // Reiniciar el juego
    comenzarJuego();
  } else {
    // Mostrar si el número es mayor o menor
    const mensaje = numeroUsuario < numeroMagico ? 'El número es mayor.' : 'El número es menor.';
    alert('Incorrecto. ' + mensaje);
  }
}