import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

import node from '@astrojs/node';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), keystatic()],

  adapter: node({
    mode: 'standalone',
  }),

  vite: {
    plugins: [tailwindcss()],
  },
});