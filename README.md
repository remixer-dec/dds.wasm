## DDS.wasm
A WebAssembly wrapper to display dds images on web pages in the browser.

### Usage
```javascript
import * as ddsLoader from './dds2img'
// this loads the wasm file
ddsLoader.isReady.then(async () => {
  // wasm runtime is ready
  const url = await ddsLoader.getDDSImageURL('path/to/file.dds')
  // returns a string with url of converted displayable image.
  // you can use set it in <img>'s src attribute to see the image
})
```

### Setup
- clone the repo
- install the project `npm install`
- start the web server `npm run dev`
- build for production `npm run build`

### Rebuilding wasm files
- fix the c library dds.c, replace #include <dds/dds.c> with #include "dds.c"
- set up the environment with [emscripten sdk](https://github.com/emscripten-core/emsdk), to do it on ARM64 machine, you can use this [container](https://hub.docker.com/r/rickardp/emscripten-devcontainer).  
 - start the container with `docker run -d --name emsdk -v PATH_TO_THIS_REPO:/mnt  rickardp/emscripten-devcontainer:2.0.12 sleep Infinity` with this repo mounted to /mnt
 - open container shell `docker exec -it emsdk bash` and update required binaries, 
 run `apt update && apt install tar && cd /emsdk/`, then update the repo, `git fetch && git checkout main && git pull`, install emsdk `./emsdk install latest && ./emsdk activate latest`, update the environment `source "/emsdk/emsdk_env.sh"`
 - go to /mnt, `cd /mnt` and build c modules with `npm run compile`