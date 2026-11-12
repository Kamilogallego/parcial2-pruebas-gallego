const { calcularTarifa } = require('./tarifas');

function resumen(estadias) {
  const reporte = { carro: 0, moto: 0, totalRecaudado: 0 };
  for (const { tipo, minutos } of estadias) {
    reporte[tipo] += 1;
    reporte.totalRecaudado += calcularTarifa(minutos, tipo);
  }
  return reporte;
}

module.exports = { resumen };
