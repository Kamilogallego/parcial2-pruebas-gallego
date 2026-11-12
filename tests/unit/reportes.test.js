/** Pruebas que protegen el comportamiento de resumen durante el refactor. */
const { resumen } = require('../../src/reportes');

describe('resumen', () => {
  test('resume los registros del día', () => {
    const registros = [
      { tipo: 'carro', minutos: 10 },
      { tipo: 'carro', minutos: 61 },
      { tipo: 'moto', minutos: 600 },
      { tipo: 'carro', minutos: 1440 },
    ];

    // 0 (gracia) + 6000 (2 horas) + 12000 (tope moto) + 25000 (tope carro)
    expect(resumen(registros)).toEqual({ carro: 3, moto: 1, totalRecaudado: 43000 });
  });

  test('sin registros todo es cero', () => {
    expect(resumen([])).toEqual({ carro: 0, moto: 0, totalRecaudado: 0 });
  });
});
