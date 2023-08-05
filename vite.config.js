/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  // base: './',
  server: {
    port: 3000
  },
  plugins: [svgr(), react()],
  root: 'src',
  build: {
    outDir: '../dist',
  },
  esbuild: {
    legalComments: 'inline',
  }
});
