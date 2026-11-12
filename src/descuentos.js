/** Descuentos según el tipo de cliente. */

function aplicarDescuento(valor, tipoCliente) {
  if (tipoCliente === 'frecuente') {
    return valor * 0.9;
  }
  return valor;
}

module.exports = { aplicarDescuento };
