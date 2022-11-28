import {isReady, getDDSImageURL} from './dds2img'
function loadTestImages() {
  const base = 'https://raw.githubusercontent.com/npedotnet/DDSReader/master/images/';
  `dds_A1R5G5B5.dds
dds_A1R5G5B5_mipmap.dds
dds_A4R4G4B4.dds
dds_A4R4G4B4_mipmap.dds
dds_A8B8G8R8.dds
dds_A8B8G8R8_mipmap.dds
dds_A8R8G8B8.dds
dds_A8R8G8B8_mipmap.dds
dds_DXT1.dds
dds_DXT1_mipmap.dds
dds_DXT2.dds
dds_DXT2_mipmap.dds
dds_DXT3.dds
dds_DXT3_mipmap.dds
dds_DXT4.dds
dds_DXT4_mipmap.dds
dds_DXT5.dds
dds_DXT5_mipmap.dds
dds_R5G6B5.dds
dds_R5G6B5_mipmap.dds
dds_R8G8B8.dds
dds_R8G8B8_mipmap.dds
dds_X1R5G5B5.dds
dds_X1R5G5B5_mipmap.dds
dds_X4R4G4B4.dds
dds_X4R4G4B4_mipmap.dds
dds_X8B8G8R8.dds
dds_X8B8G8R8_mipmap.dds
dds_X8R8G8B8.dds
dds_X8R8G8B8_mipmap.dds`.split('\n')
    .forEach(x => { document.body.innerHTML += `<img class="dds-image" source="${base}${x}">` })
  isReady.then(async() => {
    const images = Array.from(document.getElementsByClassName('dds-image'))
    for (const img of images) {
      try {
        img.src = await getDDSImageURL(img.getAttribute('source'))
      } catch (e) {
        img.classList = 'unsupported-format'
        console.log(e)
      }
    }
  })
}

loadTestImages()
