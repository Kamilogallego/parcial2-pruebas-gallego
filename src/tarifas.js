/** Cálculo de la tarifa de un parqueadero. */

const MINUTOS_DE_GRACIA = 15;
const MINUTOS_MAXIMOS = 1440;
const TARIFA_POR_HORA = { carro: 3000, moto: 1500 };
const TOPE_DIARIO = { carro: 25000, moto: 12000 };

/**
 * Calcula el valor a pagar, en pesos, por una estadía en el parqueadero.
 * Los primeros 15 minutos son gratis. Después se cobra cada hora o fracción
 * de hora según el tipo de vehículo, sin superar el tope diario.
 */
function calcularTarifa(minutos, tipoVehiculo) {
  validarEntrada(minutos, tipoVehiculo);

  if (minutos <= MINUTOS_DE_GRACIA) {
    return 0;
  }

  const horasCobradas = Math.ceil(minutos / 60);
  const valor = horasCobradas * TARIFA_POR_HORA[tipoVehiculo];
  return Math.min(valor, TOPE_DIARIO[tipoVehiculo]);
}

function validarEntrada(minutos, tipoVehiculo) {
  if (!Object.hasOwn(TARIFA_POR_HORA, tipoVehiculo)) {
    throw new Error('Tipo de vehículo no válido');
  }
  if (!esDuracionValida(minutos)) {
    throw new Error('Los minutos deben estar entre 0 y 1440');
  }
}

function esDuracionValida(minutos) {
  return Number.isInteger(minutos) && minutos >= 0 && minutos <= MINUTOS_MAXIMOS;
}

module.exports = { calcularTarifa };
