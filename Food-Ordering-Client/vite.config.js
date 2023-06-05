import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import envCompatible from 'vite-plugin-env-compatible';

export default defineConfig({
  envPrefix: 'REACT_APP_',
  build: {
    outDir: 'build',
  },
  plugins: [
    reactRefresh(),
    envCompatible(),
    
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
});
