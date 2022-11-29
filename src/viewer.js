import {getDDSImageURL} from './dds2img'

const selector = document.getElementById('selector')
const preview = document.getElementById('preview')

selector.addEventListener('change', async _ => {
  preview.src = await getDDSImageURL(URL.createObjectURL(selector.files[0]))
})
