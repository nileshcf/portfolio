import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,pdf}'],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5 MB limit
      }
    })
  ]
});
