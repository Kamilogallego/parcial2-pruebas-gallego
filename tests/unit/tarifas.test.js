/** Pruebas unitarias iniciales de calcularTarifa. Están incompletas a propósito. */
const { calcularTarifa } = require('../../src/tarifas');

describe('calcularTarifa', () => {
  test('un carro con una hora y un minuto paga dos horas', () => {
    expect(calcularTarifa(61, 'carro')).toBe(6000);
  });

  test('una moto con media hora paga una hora', () => {
    expect(calcularTarifa(30, 'moto')).toBe(1500);
  });

  test('rechaza un tipo de vehículo desconocido', () => {
    expect(() => calcularTarifa(30, 'bicicleta')).toThrow('Tipo de vehículo no válido');
  });
});
