<template>
  <div class="uploader">
    <slot :files="files" :file-list="fileList" :started="started">
      <uploader-unsupport></uploader-unsupport>
      <uploader-drop>
        <div>
          <uploader-btn>选择上传文件</uploader-btn>
          <uploader-btn :directory="true">选择文件夹</uploader-btn>
          <el-button type="primary" style="position:relative;left: 30%">注册</el-button>
        </div>
      </uploader-drop>
      <uploader-list></uploader-list>
    </slot>
  </div>
</template>

<script>
  import Uploader from 'simple-uploader.js'
  import { kebabCase } from '../common/Uploaderfile/utils'
  import UploaderBtn from './btn.vue'
  import UploaderDrop from './drop.vue'
  import UploaderUnsupport from './unsupport.vue'
  import UploaderList from './list.vue'
  import UploaderFiles from './files.vue'
  import UploaderFile from './file.vue'

  const COMPONENT_NAME = 'uploader'
  const FILE_ADDED_EVENT = 'fileAdded'
  const FILES_ADDED_EVENT = 'filesAdded'
  const UPLOAD_START_EVENT = 'uploadStart'

  export default {
    name: COMPONENT_NAME,
    provide () {
      return {
        uploader: this
      }
    },
    props: {
      options: {
        type: Object,
        default () {
          return {}
        }
      },
      autoStart: {
        type: Boolean,
        default: true
      },
      fileStatusText: {
        type: [Object, Function],
        default () {
          return {
            success: 'success',
            error: 'error',
            uploading: 'uploading',
            paused: 'paused',
            waiting: 'waiting'
          }
        }
      }
    },
    data () {
      return {
        started: false,
        files: [],
        fileList: []
      }
    },
    methods: {
      uploadStart () {
        this.started = true
      },
      fileAdded (file) {
        this.$emit(kebabCase(FILE_ADDED_EVENT), file)
        if (file.ignored) {
          // is ignored, filter it
          return false
        }
      },
      filesAdded (files, fileList) {
        this.$emit(kebabCase(FILES_ADDED_EVENT), files, fileList)
        if (files.ignored || fileList.ignored) {
          // is ignored, filter it
          return false
        }
      },
      fileRemoved (file) {
        this.files = this.uploader.files
        this.fileList = this.uploader.fileList
      },
      filesSubmitted (files, fileList) {
        this.files = this.uploader.files
        this.fileList = this.uploader.fileList
        if (this.autoStart) {
          this.uploader.upload()
        }
      },
      allEvent (...args) {
        const name = args[0]
        const EVENTSMAP = {
          [FILE_ADDED_EVENT]: true,
          [FILES_ADDED_EVENT]: true,
          [UPLOAD_START_EVENT]: 'uploadStart'
        }
        const handler = EVENTSMAP[name]
        if (handler) {
          if (handler === true) {
            return
          }
          this[handler].apply(this, args.slice(1))
        }
        args[0] = kebabCase(name)
        this.$emit.apply(this, args)
      }
    },
    created () {
      this.options.initialPaused = !this.autoStart
      const uploader = new Uploader(this.options)
      this.uploader = uploader
      this.uploader.fileStatusText = this.fileStatusText
      uploader.on('catchAll', this.allEvent)
      uploader.on(FILE_ADDED_EVENT, this.fileAdded)
      uploader.on(FILES_ADDED_EVENT, this.filesAdded)
      uploader.on('fileRemoved', this.fileRemoved)
      uploader.on('filesSubmitted', this.filesSubmitted)
    },
    destroyed () {
      const uploader = this.uploader
      uploader.off('catchAll', this.allEvent)
      uploader.off(FILE_ADDED_EVENT, this.fileAdded)
      uploader.off(FILES_ADDED_EVENT, this.filesAdded)
      uploader.off('fileRemoved', this.fileRemoved)
      uploader.off('filesSubmitted', this.filesSubmitted)
      this.uploader = null
    },
    components: {
      UploaderBtn,
      UploaderDrop,
      UploaderUnsupport,
      UploaderList,
      UploaderFiles,
      UploaderFile
    }
  }
</script>

<style>
  .uploader {
    position: relative;
  }
  .uploader-drop {
    width: 880px;
    z-index: 1;
    padding: 15px;
    margin-left: 250px;
    /*margin-bottom: 230px;*/
    font-size: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .4);
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  .uploader-drop .uploader-btn {
    margin-right: 4px;
  }
  .uploader-drop .uploader-list {
    max-height: 440px;
    overflow: auto;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .el-button{
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 7px;
    padding-bottom: 7px;
  }


</style>
