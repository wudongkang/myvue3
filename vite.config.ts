import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
// import vitePluginImport from 'vite-plugin-babel-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
  //   vitePluginImport([
  //   {
  //    libraryName: 'element-plus',
  //    libraryDirectory: 'es',
  //    ignoreStyles:['.sass', '.scss'],
  //    style(name) {
  //      return `element-plus/lib/theme-chalk/${name}.css`
  //    }
  //   }
  //  ])
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.join(__dirname, 'src'),
      },
    ],
  }
                                                   
})
