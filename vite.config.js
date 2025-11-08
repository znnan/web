import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/web/',  // 根据您的 GitHub 仓库名称修改，如果仓库名是 'web' 则使用 '/web/'
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
