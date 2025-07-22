import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: './public/index.html',
  },
  server: {
    base: '/foo',
    proxy: {
      '/weather-api':
      {
        target:
          'https://api.weatherapi.com/v1',
        changeOrigin: true,

      },
      '/foo/external': {
        target: 'https://jsonplaceholder.typicode.com',
        changeOrigin: true,
        pathRewrite: { '^/foo/external': '' },
      },
    }
  },
  output: {
    distPath: {
      root: 'build',
    },
  },
});