import initModule from '../lib/generated/dds.js'
let API, WASM
// eslint-disable-next-line promise/param-names
export const isReady = new Promise((ready) => {
  initModule().then(
    async wasmModule => {
      WASM = wasmModule
      API = {
        alloc: WASM.cwrap('create_buffer', 'number', ['number']),
        load: WASM.cwrap('call_load_wrapper', '', ['array', 'number']),
        getPointer: WASM.cwrap('get_pointer', 'number', []),
        getSize: WASM.cwrap('get_size', 'number', []),
        getWidth: WASM.cwrap('get_width', 'number', []),
        getHeight: WASM.cwrap('get_height', 'number', []),
        getFlags: WASM.cwrap('get_format_flags', 'boolean', []),
        clean: WASM.cwrap('destroy_buffer', '', ['number'])
      }
      ready()
    })
})

export async function getDDSImage(path, options) {
  options = {outputFormat: 'url', transparency: false, ...options}
  let ddsData = await fetch(path)
  ddsData = await ddsData.arrayBuffer()
  ddsData = new Uint8Array(ddsData)

  const buf = API.alloc(ddsData.length)
  WASM.HEAPU8.set(ddsData, buf)

  API.load(buf, ddsData.length)

  const metadata = {width: API.getWidth(), height: API.getHeight(), flags: API.getFlags()}

  let resultView = new Uint8Array(
    WASM.HEAPU8.buffer,
    API.getPointer(),
    API.getSize()
  )

  if (!options.transparency) {
    resultView = resultView.map((x, i) => (i > 0 && i % 4 === 3) ? 255 : x)
  }
  const image = await loadImage(resultView, metadata.width, metadata.height, API.getSize())
  API.clean(buf)
  API.clean(API.getPointer())
  if (!image) return false
  return options.outputFormat === 'url' ? URL.createObjectURL(image) : {blob: image, ...metadata}
}

async function loadImage(buffer, w, h, size) {
  if (!w) return false
  const canvas = document.createElement('canvas')
  canvas.width = w
  canvas.height = h
  const ctx = canvas.getContext('2d')
  const imageData = new ImageData(new Uint8ClampedArray(buffer.slice(0, size)), w, h)
  ctx.drawImage(await createImageBitmap(imageData, {imageOrientation: 'flipY'}), 0, 0)
  return new Promise((resolve, reject) => canvas.toBlob(resolve))
}
