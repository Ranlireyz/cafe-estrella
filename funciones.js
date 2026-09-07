  // const botonReservar = document.querySelector('#boton-reservar');


function calcularPrecio(precioUnitario, cantidad) {
  const total = precioUnitario * cantidad;
  return total;
}

function puedeReservar(tazasDisponibles) {
  return tazasDisponibles > 0;
}
// function puedeReservar(cantidad) {
//   if (cantidad <= 2) {
//     return true;
//   } else {
//     return false;
//   }
// }
const botonReservar = document.querySelector('#boton-reservar');
const contadorTazas = document.querySelector('#contador-tazas');

function restarTaza() {
  const tazasActuales = Number(contadorTazas.textContent);

  if (puedeReservar(tazasActuales)) {
    contadorTazas.textContent = tazasActuales - 1;
    if(Number(contadorTazas.textContent) === 0){
      botonReservar.classList.add("oculto")
    }
    console.log('¡Reserva exitosa! Disfruta tu taza de café.');
  } else {
    alert('Lo sentimos, no hay tazas disponibles para reservar.');
  }

}
botonReservar.addEventListener('click', restarTaza );