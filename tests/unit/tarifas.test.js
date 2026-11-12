/** Pruebas unitarias de calcularTarifa: particiones de equivalencia y valores límite. */
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

  describe('minutos de gracia: hasta 15 minutos no se paga', () => {
    test.each([
      [0, 'carro'],
      [15, 'carro'],
      [0, 'moto'],
      [15, 'moto'],
    ])('con %i minutos un %s paga 0', (minutos, tipo) => {
      expect(calcularTarifa(minutos, tipo)).toBe(0);
    });

    test.each([
      [16, 'carro', 3000],
      [16, 'moto', 1500],
    ])('con %i minutos un %s ya paga una hora (%i)', (minutos, tipo, esperado) => {
      expect(calcularTarifa(minutos, tipo)).toBe(esperado);
    });
  });

  describe('cobro por hora o fracción', () => {
    test.each([
      [60, 'carro', 3000],
      [61, 'moto', 3000],
      [60, 'moto', 1500],
      [120, 'carro', 6000],
      [121, 'carro', 9000],
    ])('con %i minutos un %s paga %i', (minutos, tipo, esperado) => {
      expect(calcularTarifa(minutos, tipo)).toBe(esperado);
    });
  });

  describe('tope diario', () => {
    test.each([
      [480, 'carro', 24000],
      [481, 'carro', 25000],
      [1440, 'carro', 25000],
      [480, 'moto', 12000],
      [481, 'moto', 12000],
      [1440, 'moto', 12000],
    ])('con %i minutos un %s paga %i', (minutos, tipo, esperado) => {
      expect(calcularTarifa(minutos, tipo)).toBe(esperado);
    });
  });

  describe('entradas inválidas', () => {
    test.each([[''], ['Carro'], ['MOTO'], [undefined], [null]])(
      'rechaza el tipo de vehículo %p',
      (tipo) => {
        expect(() => calcularTarifa(30, tipo)).toThrow('Tipo de vehículo no válido');
      },
    );

    test.each([[-1], [1441], [30.5], ['30'], [Number.NaN], [undefined]])(
      'rechaza la duración %p',
      (minutos) => {
        expect(() => calcularTarifa(minutos, 'carro')).toThrow(
          'Los minutos deben estar entre 0 y 1440',
        );
      },
    );
  });
});
