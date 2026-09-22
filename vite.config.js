import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// IMPORTA EL PLUGIN AQUÍ
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    // AÑÁDELO A LA LISTA AQUÍ
    tailwindcss(),
  ],
})