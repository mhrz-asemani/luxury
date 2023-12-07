import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import sass from 'rollup-plugin-sass';
import usePHP from 'vite-plugin-php';


export default defineConfig({
  plugins: [
    vue(),
    sass({ insert: true }),
    // usePHP({
      // entry: ['index.php']
    // }),
    legacy({
      // defaults means:  'last 2 versions and not dead, > 0.3%, Firefox ESR'
        targets: ['defaults', 'not IE 11'],
    })
  ],
  build: {
    // emptyOutDir: true,
    minify: false,
    rollupOptions: {

    }
  },
  resolve: {
    alias: {
      // "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      sass: {
        // additionalData: `@import "src/assets/scss/_variables.scss";`
      }
    }
  }
})
