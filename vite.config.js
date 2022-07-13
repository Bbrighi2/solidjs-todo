const { defineConfig } = require('vite');
const solidPlugin = require('vite-plugin-solid');

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
});
