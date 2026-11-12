/**
 * Configuración de Jest.
 * testMatch: los *.test.js son pruebas unitarias y los *.steps.js conectan los escenarios BDD.
 * coverageThreshold: si la cobertura de líneas o de ramas baja de 90 %, Jest termina con error.
 */
module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.js', '**/tests/**/*.steps.js'],
  collectCoverageFrom: ['src/**/*.js'],
  coverageThreshold: {
    global: { lines: 90, branches: 90 },
  },
};
