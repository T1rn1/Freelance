import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: '**/*.svg',
      svgrOptions: { exportType: 'default', ref: true, svgo: false, titleProp: true },
    }),
  ],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components'),
      models: path.resolve(__dirname, './src/models'),
      pages: path.resolve(__dirname, './src/pages'),
      styles: path.resolve(__dirname, './src/styles'),
      services: path.resolve(__dirname, './src/services'),
    },
  },
});
