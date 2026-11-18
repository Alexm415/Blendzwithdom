/* global process */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
// The site is served from GitHub Pages at https://alexm415.github.io/Blendzwithdom/.
// Override with VITE_BASE (e.g. VITE_BASE=/ for a custom domain or local root hosting).
export default defineConfig({
  base: process.env.VITE_BASE || '/Blendzwithdom/',
  plugins: [react()],
})
