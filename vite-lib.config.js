import * as path from 'path'
// vite.config.js
export default {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/dds2img.js'),
      name: 'DDS',
      fileName: (format) => `dds.wasm-${format}.js`
    }
  }
}
