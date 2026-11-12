const fs = require('fs');

function resumen(registros) {
  const r = { carro: 0, moto: 0, totalRecaudado: 0 };
  let temporal = 0;
  for (const reg of registros) {
    if (reg.tipo == 'carro') {
      r.carro++;
      if (reg.minutos > 15) {
        let v = Math.ceil(reg.minutos / 60) * 3000;
        if (v > 25000) {
          v = 25000;
        }
        r.totalRecaudado += v;
      }
    } else if (reg.tipo == 'moto') {
      r.moto++;
      if (reg.minutos > 15) {
        let v = Math.ceil(reg.minutos / 60) * 1500;
        if (v > 12000) {
          v = 12000;
        }
        r.totalRecaudado += v;
      }
    }
  }
  return r;
}

module.exports = { resumen };
