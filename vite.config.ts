import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Served at the root of a custom domain (Cloudflare Pages), with clean URLs.
  base: '/',
  plugins: [react()],
})
