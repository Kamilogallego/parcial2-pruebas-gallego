/** Pruebas unitarias de aplicarDescuento, construidas con TDD. */
const { aplicarDescuento } = require('../../src/descuentos');

describe('aplicarDescuento', () => {
  test('un cliente sin descuento paga el valor completo', () => {
    expect(aplicarDescuento(3000, 'ninguno')).toBe(3000);
  });

  test('un cliente frecuente tiene 10 % de descuento', () => {
    expect(aplicarDescuento(3000, 'frecuente')).toBe(2700);
  });

  test('un cliente con convenio tiene 20 % de descuento', () => {
    expect(aplicarDescuento(25000, 'convenio')).toBe(20000);
  });

  test('el resultado se redondea hacia abajo al peso entero', () => {
    expect(aplicarDescuento(1999, 'frecuente')).toBe(1799);
  });
});
