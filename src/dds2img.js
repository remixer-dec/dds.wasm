import initModule from '../public/dds.js'
let api, WASM
// eslint-disable-next-line promise/param-names
export const isReady = new Promise((ready) => {
  initModule().then(
    async wasmModule => {
      WASM = wasmModule
      api = {
        alloc: WASM.cwrap('create_buffer', 'number', ['number']),
        load: WASM.cwrap('call_load_wrapper', '', ['array', 'number']),
        get_pointer: WASM.cwrap('get_pointer', 'number', []),
        get_size: WASM.cwrap('get_size', 'number', []),
        get_width: WASM.cwrap('get_width', 'number', []),
        get_height: WASM.cwrap('get_height', 'number', []),
        clean: WASM.cwrap('destroy_buffer', '', ['number'])
      }
      ready()
    })
})

export async function getDDSImageURL(path) {
  let ddsData = await fetch(path)
  ddsData = await ddsData.arrayBuffer()
  ddsData = new Uint8Array(ddsData)

  const buf = api.alloc(ddsData.length)
  WASM.HEAPU8.set(ddsData, buf)

  api.load(buf, ddsData.length)

  const resultView = new Uint8Array(
    WASM.HEAPU8.buffer,
    api.get_pointer(),
    api.get_size()
  )

  const image = await loadImage(resultView, api.get_width(), api.get_height(), api.get_size())
  api.clean(buf)
  api.clean(api.get_pointer())
  return URL.createObjectURL(image)
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
