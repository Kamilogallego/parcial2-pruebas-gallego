/**
 * Configuración de ESLint (formato "flat config", el único vigente desde ESLint 10).
 * Usa extensión .mjs porque el proyecto es CommonJS y este archivo usa import/export.
 */
import js from '@eslint/js';
import globals from 'globals';

export default [
  { ignores: ['node_modules/', 'coverage/'] },
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: { sourceType: 'commonjs', globals: { ...globals.node } },
    rules: {
      eqeqeq: 'error',
      complexity: ['error', 5],
    },
  },
  {
    files: ['tests/**/*.js'],
    languageOptions: { globals: { ...globals.jest } },
  },
];
