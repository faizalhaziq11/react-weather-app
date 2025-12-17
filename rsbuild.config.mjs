import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: './public/index.html',
  },
  server: {
    base: '/',
    proxy: {
      '/weather-api':
      {
        target: import.meta.env.WEATHER_API_URL,
        changeOrigin: true,
        pathRewrite: { '^/weather-api': '' }
      },
    }
  },
  output: {
    distPath: {
      root: 'build',
    },
    polyfill: 'usage'
  },
  environments: {}
});