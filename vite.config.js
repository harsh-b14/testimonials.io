import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     '/user': 'http://locahost:8000'
  //   }
  // },
  plugins: [react()],
})