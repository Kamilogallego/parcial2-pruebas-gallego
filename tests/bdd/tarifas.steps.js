/** Pasos que ejecutan los escenarios de tarifas.feature. */
const { defineFeature, loadFeature } = require('jest-cucumber');
const { calcularTarifa } = require('../../src/tarifas');
const { aplicarDescuento } = require('../../src/descuentos');

const feature = loadFeature('./tests/bdd/features/tarifas.feature');

defineFeature(feature, (test) => {
  test('Cobro de un <vehiculo> que estuvo <minutos> minutos', ({ given, when, then }) => {
    let vehiculo;
    let minutos;
    let valorAPagar;

    given(/^que un (\w+) estuvo (\d+) minutos en el parqueadero$/, (tipo, duracion) => {
      vehiculo = tipo;
      minutos = Number(duracion);
    });

    when('se calcula lo que debe pagar', () => {
      valorAPagar = calcularTarifa(minutos, vehiculo);
    });

    then(/^debe pagar (\d+) pesos$/, (esperado) => {
      expect(valorAPagar).toBe(Number(esperado));
    });
  });

  const escenarioDeDescuento = ({ given, when, then }) => {
    let tipoCliente;
    let valor;
    let valorAPagar;

    given(/^que un cliente (\w+) debe pagar (\d+) pesos$/, (tipo, monto) => {
      tipoCliente = tipo;
      valor = Number(monto);
    });

    when('se le aplica su descuento', () => {
      valorAPagar = aplicarDescuento(valor, tipoCliente);
    });

    then(/^debe pagar (\d+) pesos$/, (esperado) => {
      expect(valorAPagar).toBe(Number(esperado));
    });
  };

  test('Un cliente frecuente recibe su descuento', escenarioDeDescuento);
  test(
    'Un cliente con convenio recibe su descuento sobre el tope del carro',
    escenarioDeDescuento,
  );
});
