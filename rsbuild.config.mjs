import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: './public/index.html',
  },
  server: {
    proxy: {
      '/weather-api':
      {
        target: "https://api.weatherapi.com/v1/",
        changeOrigin: true,
        pathRewrite: { '^/weather-api': '' }
      },
    }
  },
  output: {
    distPath: {
      root: 'build',
    },
  },
  environments: {}
});