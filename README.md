## DDS.wasm
A WebAssembly wrapper to display dds images on web pages in the browser.

### Demo / viewer
This demo shows how to use dds files in regular img tags. You can check out the demo [here](https://remixer-dec.github.io/dds.wasm/)

### Usage as a library
`npm install --save git+https://github.com/remixer-dec/dds.wasm.git` (if it hangs, use yarn)

```javascript
import * as ddsLoader from 'dds.wasm'
// this loads the wasm file
ddsLoader.isReady.then(async () => {
  // wasm runtime is ready
  const url = await ddsLoader.getDDSImage('path/to/file.dds')
  // returns a string with url of converted displayable image.
  // you can use set it in <img>'s src attribute to see the image
  // to get image metadata and bytes, use the second argument with {outputFormat: 'data'}
})
```

### Setup
- clone the repo `git clone https://github.com/remixer-dec/dds.wasm`
- install the project `npm install`
- start the web server `npm run dev`
- build for production `npm run build`

### Rebuilding wasm files
- fix the c library dds.c, replace `#include <dds/dds.c>` with `#include "dds.c"`
- set up the environment with [emscripten sdk](https://github.com/emscripten-core/emsdk), to do it on ARM64 machine, you can use command `npm run create-container`, then update the dependencies with `npm run update-container`
 - open container shell `docker exec -it emsdk bash`, go to /mnt, `cd /mnt` and build c modules with `npm run compile`

 ### Credits

 [Original C library by dfranx](https://github.com/dfranx/DDS)