/** Descuentos según el tipo de cliente. */

function aplicarDescuento(valor, tipoCliente) {
  if (valor < 0) {
    throw new Error('El valor no puede ser negativo');
  }
  if (tipoCliente === 'frecuente') {
    return Math.floor((valor * 90) / 100);
  }
  if (tipoCliente === 'convenio') {
    return Math.floor((valor * 80) / 100);
  }
  return valor;
}

module.exports = { aplicarDescuento };
