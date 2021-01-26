<template>
  <div class="menu-item" @mouseover="isOpen = true" @mouseleave="isOpen = false">
    <a v-bind:href="link">
      {{ title }}
    </a>
    <svg viewBox="0 0 1030 638" width="10">
      <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="#FFF"></path>
    </svg>
    <transition name="fade" appear>
      <div class="sub-menu" v-if="isOpen" >
        <div v-for="(item, i) in items" :key="i" class="menu-item">
          <a :href="item.link">{{ item.title }}</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'dropdown',
  props: ['title', 'items','link'],
  data () {
    return {
      isOpen: false
    }
  }
}
</script>

<style>
nav .menu-item svg {
  width: 10px;
  margin-left: 10px;

}

nav .menu-item .sub-menu {
  position: absolute;
  background-color: #202e51;
  color: #60aff6;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  width: 105px;
  border-radius: 0px 0px 0px 0px;

}

.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
