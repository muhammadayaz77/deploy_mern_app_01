import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',  // Ensure your base path is set to root for proper routing
  build: {
    outDir: 'build', // Output folder for your production build (default: dist)
  },
  plugins: [react()],
})

// export default defineConfig({
//   base: '/',  // Ensure your base path is set to root for proper routing
//   build: {
//     outDir: 'build', // Output folder for your production build (default: dist)
//   }
// });
