/** Pruebas unitarias de aplicarDescuento, construidas con TDD. */
const { aplicarDescuento } = require('../../src/descuentos');

describe('aplicarDescuento', () => {
  test('un cliente sin descuento paga el valor completo', () => {
    expect(aplicarDescuento(3000, 'ninguno')).toBe(3000);
  });
});
