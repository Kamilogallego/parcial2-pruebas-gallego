/** Descuentos según el tipo de cliente. */

const PORCENTAJE_DE_DESCUENTO = { ninguno: 0, frecuente: 10, convenio: 20 };

/**
 * Aplica al valor el descuento del tipo de cliente.
 * El resultado se redondea hacia abajo al peso entero.
 */
function aplicarDescuento(valor, tipoCliente) {
  if (valor < 0) {
    throw new Error('El valor no puede ser negativo');
  }
  if (!Object.hasOwn(PORCENTAJE_DE_DESCUENTO, tipoCliente)) {
    throw new Error('Tipo de cliente no válido');
  }

  const porcentajeAPagar = 100 - PORCENTAJE_DE_DESCUENTO[tipoCliente];
  return Math.floor((valor * porcentajeAPagar) / 100);
}

module.exports = { aplicarDescuento };
