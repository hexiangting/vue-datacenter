<template>
  <nav style="position:relative;z-index:99;">
    <div class="menu-item"><a href="/#/home">首页</a></div>
    <Dropdown title="传感器资源" :items="sensorResource" link="/#/sensorResource"/>
    <Dropdown title="观测数据资源" :items="obsResource" link="/#/obsResource"/>
    <Dropdown title="数据产品资源" :items="productResource" link="/#/productResource"/>
    <Dropdown title="算法模型资源" :items="modelResource" link="/#/modelResource"/>
    <Dropdown title="传感器注册" :items="sensorRegister" link="/#/sensorRegister/"/>
    <div class="menu-item"><a href="#">联系我们</a></div>
  </nav>
</template>

<script>
import Dropdown from '../Dropdown';

export default {
  name: 'navbar',
  components: {
    Dropdown
  },
  data () {
    return {
      sensorResource: [
        {
          title: '原位传感器',
          link: '#'
        },
        {
          title: '移动传感器',
          link:'#'
        },
        {
          title: 'RFID',
          link: '#'
        }
      ],
      obsResource: [

      ],
      productResource: [],
      modelResource: [],
      sensorRegister:[

      ]
    }
  },

}
</script>

<style >
nav {
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("../../assets/img/top_bg.png");
}

nav .menu-item {
  color: white;
  padding: 10px 15px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
  font-size: 13px;
}

nav .menu-item.active,
nav .menu-item:hover {
  background-color: transparent;
  color: #60aff6;
  border-bottom-color: #0077aa;
}

nav .menu-item a {
  color: inherit;
  text-decoration: none;
}


</style>
