// import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
// import usePHP from 'vite-plugin-php';

export default defineConfig({
  plugins: [
    vue(),
    // usePHP({
    //   binary: 'c:\\xampp\\php\\php.exe',
    //   entry: ['index.php'],
    // }),
    legacy({
        targets: ['defaults', 'not IE 11'],   // defaults means:  'last 2 versions and not dead, > 0.3%, Firefox ESR'
    })
    // sass({ insert: true }),
  ],
  // server: {
  //   host: '192.168.1.155', // Change this to a valid IP address if needed
  //   port: 5173, // Optional otherwise your app will start on default port
  // },
  build: {
    // emptyOutDir: true,
    minify: false,
    rollupOptions: {
    }
  },
  resolve: {
    alias:
      {
        vue: 'vue/dist/vue.esm-bundler.js',
        "@": fileURLToPath(new URL("./src", import.meta.url))
        // "./runtimeConfig": "./runtimeConfig.browser",
        // "_": fileURLToPath(new URL("./src", import.meta.url))
      },

  },
  css: {
    // preprocessorOptions: {
    //   sass: {
    //     additionalData: `@import "@/luxury.sass";`
    //   }
    // }
  }
})
