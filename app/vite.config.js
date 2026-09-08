import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// La base se define en tiempo de build para que coincida con la subruta
// real de GitHub Pages (ej: /nombre-del-repo/). En local no hace falta tocarla.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/',
})
