import commonTable from './common/commonTable'
import Uploader from '../components/upload/uploader.vue'
import UploaderBtn from '../components/upload/btn.vue'
import UploaderDrop from '../components/upload/drop.vue'
import UploaderUnsupport from '../components/upload/unsupport.vue'
import UploaderList from '../components/upload/list.vue'
import UploaderFiles from '../components/upload/files.vue'
import UploaderFile from '../components/upload/file.vue'
import {DEFAULT_WMS_VERSION} from "ol/source/common";

const uploader = {
  version: /* eslint-disable no-undef */ DEFAULT_WMS_VERSION,
  install,
  Uploader,
  UploaderBtn,
  UploaderDrop,
  UploaderUnsupport,
  UploaderList,
  UploaderFiles,
  UploaderFile
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

//将自定义的组件在Vue中进行注册
export default {
  install(Vue) {
    Vue.component('commonTable', commonTable)
  },
  uploader
}

function install (Vue) {
  if (install.installed) {
    return
  }
  Vue.component(Uploader.name, Uploader)
  Vue.component(UploaderBtn.name, UploaderBtn)
  Vue.component(UploaderDrop.name, UploaderDrop)
  Vue.component(UploaderUnsupport.name, UploaderUnsupport)
  Vue.component(UploaderList.name, UploaderList)
  Vue.component(UploaderFiles.name, UploaderFiles)
  Vue.component(UploaderFile.name, UploaderFile)
}
