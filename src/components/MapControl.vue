<!--高德地图-->
<template>
  <div style="position: relative;width: 100%;height: 100%;left:210px;z-index: 0" :mapStyle="mapStyle">
    <div id="container" style="width:100%; height:100%">

    </div>
    <div id="myPageTop" style="position: absolute;top: 20px;left: 50px;">
      <table>
        <tr><td>
            <label style="color: white;font-weight: 999">请输入关键字：</label>
          </td></tr>
        <tr><td>
            <input v-model="input" id="tipinput"/><button @click="searchAddress">搜索</button>
            <button @click="clearAddress">清除</button>
          </td></tr>
      </table>
    </div>
    <div class="input-card" style="position: absolute;top: 85%;right: 20px;">
      <h4 style="color: #eaffea">左击获取经纬度：</h4>
      <div class="input-item">
        <input type="text" readonly="true" id="lnglat">
      </div>
    </div>


  </div>

</template>

<script>

import AMap from 'AMap';
let map, placeSearch,marker;
var _this = {};
window.sensordetail = function (){
  _this.$router.push({path:'/SensorDetail'});
}
export default {
  name: "AMap",
  data() {
    return {
      input: '',
      mapStyle:'amap://styles/c4565346a01fa08dda389df410912edf',
      sensors: [],
      position:'',
      name:'',
    }
  },
  mounted: function () {
    this.AMapInit()
  },
  beforeCreate(){
    _this = this;
  },
  methods: {
    AMapInit: function (e) {
      map = new AMap.Map('container', {
        resizeEnable: true,
        center: [114.303379,30.593617],
        zoom: 10,
      });

      map.setMapStyle('amap://styles/c4565346a01fa08dda389df410912edf');
      //为地图注册click事件获取鼠标点击出的经纬度坐标
      map.on('click', function(e) {
        document.getElementById("lnglat").value = e.lnglat.getLng() + ',' + e.lnglat.getLat()
      });
      AMap.service(["AMap.PlaceSearch"], function () {
        //构造地点查询类
        placeSearch = new AMap.PlaceSearch({
          pageSize: 5, // 单页显示结果条数
          pageIndex: 1, // 页码
          citylimit: false,  //是否强制限制在设置的城市内搜索
          map: map, // 展现结果的地图实例
          panel: "panel", // 结果列表将在此容器中进行展示。
          autoFitView: true, // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
          renderStyle: 'default'
        });
      });
      marker = new AMap.Marker('container',{
        position:map.getCenter(),
        icon:'//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png',
        offset:new AMap.Pixel(-13,-30)
      });

      marker.setMap(map);
      // 设置鼠标划过点标记显示的文字提示
      marker.setTitle({

      });
      // 设置label标签
      // label默认蓝框白底左上角显示，样式className为：amap-marker-label
      marker.setLabel({
        offset: new AMap.Pixel(20, 20),  //设置文本标注偏移量
        // content: "<div class='info'>我是 marker 的 label 标签</div>", //设置文本标注内容
        direction: 'right' //设置文本标注方位
      });
        // 添加列表点选监听事件
      AMap.event.addListener(placeSearch, "selectChanged", this.selectAddress);

        //加载海量点
      var style = [{
        url: '/static/img/marker.png',
        anchor: new AMap.Pixel(20,20),
        size: new AMap.Size(25,25),
      }]
      var _this = this

      this.$axios({
        method:'get',
        url:`http://192.168.0.135:8081/sensor/getAllProcedureInfo` ,
        // headers:{
        // //   'Authorization': ' Bearer ' + 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2luZm8iOnsiaWQiOjEsInVzZXJuYW1lIjoic2Vuc29yd2ViIiwicGFzc3dvcmQiOiIkMmEkMTAkTGR2LjZsRHVxS3kuWHNlMi90M1RXdTVEZlNCM0p6QTRaSHFXNi9STEVscUtIRFN2Nm1SMm0iLCJ0ZWxlcGhvbmUiOm51bGwsImFkZHJlc3MiOiJodWJlaSIsImVuYWJsZWQiOnRydWUsImFjY291bnROb25FeHBpcmVkIjp0cnVlLCJhY2NvdW50Tm9uTG9ja2VkIjp0cnVlLCJjcmVkZW50aWFsc05vbkV4cGlyZWQiOnRydWUsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJhZG1pbiJ9XX0sInVzZXJfbmFtZSI6InNlbnNvcndlYiIsInNjb3BlIjpbImFwcCJdLCJhdGkiOiJlZjc4ODQyYS0yNzY4LTQzNjUtYTEzYi04ZTJjNTZmZWUyOTciLCJleHAiOjE2MTA0NDEwNDksImF1dGhvcml0aWVzIjpbImFkbWluIl0sImp0aSI6IjEyNzk4ZjA4LTc5NmYtNGU5MC04ZjcwLTUyODMyY2VjMzA2YSIsImNsaWVudF9pZCI6InNlbnNvcndlYiJ9.Vat260TAbsA6pSd3Aec_G-M4zB8zbR6WgzoBT-EbFEJHXLXbH_O219DC12LuytJUEIUHTbb4ESdhvBXDKXflMgMqlh3hvpL04S6F6DPhvnA1UoJOSHnyqL--ev8giAuUniFKGi5yJQvSRMQzOwim_9BIYvwSdmLXMWVOsI2SEwZzC8t_lKJqQm-X25wlLgL86Nnu4urYztA2ZRrWo14tiJFmgMZqH8-WhoQgjQLiOsVCextDtL8wxIuP_3etK3K91Cufe4ZyG4fv-Oc5rjTlOqLPPAIsc35NwHWbdZGZUX90qDpmsgw76RrNP9fPmvPprXyF7HBh0Pbjb1uEiyMncw',
        //   token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2luZm8iOnsiaWQiOjEsInVzZXJuYW1lIjoic2Vuc29yd2ViIiwicGFzc3dvcmQiOiIkMmEkMTAkTGR2LjZsRHVxS3kuWHNlMi90M1RXdTVEZlNCM0p6QTRaSHFXNi9STEVscUtIRFN2Nm1SMm0iLCJ0ZWxlcGhvbmUiOm51bGwsImFkZHJlc3MiOiJodWJlaSIsImVuYWJsZWQiOnRydWUsImFjY291bnROb25FeHBpcmVkIjp0cnVlLCJhY2NvdW50Tm9uTG9ja2VkIjp0cnVlLCJjcmVkZW50aWFsc05vbkV4cGlyZWQiOnRydWUsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJhZG1pbiJ9XX0sInVzZXJfbmFtZSI6InNlbnNvcndlYiIsInNjb3BlIjpbImFwcCJdLCJhdGkiOiJkMGE3MjQ1NS1iODBlLTQyYmMtOTljZS0zMWFjMDk2ZDIyYWYiLCJleHAiOjE2MTA0MzcwMTksImF1dGhvcml0aWVzIjpbImFkbWluIl0sImp0aSI6ImQ4MjZkMWUwLWE3ZGMtNGIzZi1hMmE3LWNhMTQ3MDRlZDljZCIsImNsaWVudF9pZCI6InNlbnNvcndlYiJ9.B2Q5vkdMmp_siXrc1tKAHFRboS6ODHYAIh6eHEnvn_wXnIO0Au9ewy-IqcEg2CSQovZCz6jt-SiG4vZzrpx3K4AiRrAlUZs1uNmHSdCvZogyLOs5wUhAoei_eVMnrW5_apNh0so0v5fIFXor6Fa7uNDm1_ueGjWcVWLrHGYgVbVNTzhVyYO8MWgJImgp-NLD4ITvy8_CzWdiXH9tfpgUswaewBfPE4ObRP9DAvy870gU8Nc_YdBq1CDa0gvhaMTx_6gyZDMwxirVVkZ1ylIDUjU9u8-JkE_R5km0kmD9MxurzNTeg348SgWh6GB4Neiqta5gQ_mNAV3INEMgQ5ZrIQ',
        // },
      }).then(resp => {
        console.log("!!")
        if(resp.status === 200){
          _this.data = resp.data;
          var temps = new Array();
          var sensor = {};
          for(var i = 0; i < _this.data.length; i++){
            var sensors = _this.data[i].sensors;
            for(var j = 0; j < sensors.length; j++){
              var temp = new Array();
              if (sensors[j].position!=null && sensors[j].position!=null && sensors[j].name!=null) {
                temp.push(sensors[j].position.longitude)
                temp.push(sensors[j].position.latitude)
                sensor = {
                  'lnglat': temp,
                  'name': sensors[j].name,
                  'style': 2
                }
                temps.push(sensor);
              }else{
                continue
              }
            }

          }
          // console.log(JSON.stringify(temps));

          var mass = new AMap.MassMarks(temps,{
            opacity: 0.8,
            zIndex: 111,
            cursor: 'pointer',
            style: style,
          });
          var infoWindow;
          var marker = new AMap.Marker({content:'',map:map, position: temps.lnglat});
          mass.on('mouseover', function (e) {

            marker.setPosition(e.data.lnglat);
            // marker.setLabel({content: e.data.name},{})
            var info = [];
            var inf =  '<div><input type="button" value="点击进入详情页面" onclick="sensordetail()"></input></div>'

            info.push( '<div class="info-title">环境监测数据中心</div><div class="info-content">')
            // info.push('<img src="../../static/img/monitor.png">'+  "<br/>");
            info.push("监测站名称:" + e.data.name +  "<br/>")
            info.push("经纬度:" + "[" + e.data.lnglat + "]" + "\n")
            info.push(inf + "\n")

            infoWindow = new AMap.InfoWindow({
              content: info.join("") //使用默认信息窗体样式，显示信息内容
            })
            infoWindow.open(map,marker.getPosition())

          });

          //构建信息窗体中显示的内容

          // mass.setData(temps);
          mass.setMap(map);
        }else{
          _this.$message({
            message: resp.data.msg,
            type:'warning'
          })
        }

      })

    },

    //搜索功能实现
    searchAddress() {
      placeSearch.search(this.input);
    },
    selectAddress(e) {
      //这里获得点选地点的经纬度
      let location = e.selected.data.location;
      console.log('lng',location.lng);
      console.log('lat',location.lat);
      // Do Something
    },
    //清除搜索记录
    clearAddress(){
        placeSearch.clear();
    },
    // sensordetail:function (){
    //   let _tis = this
    //   _tis.$router.replace({path:'/SensorDetail'});
    // },
    // getclick :function (){
    //   let tis = this;
    //   window.sensordetail = tis.sensordetail();
    // }

  },

}
</script>
<style lang="scss" scoped>
  html,body,#container{
    height: 100%;
    width: 100%;
  }

  #panel {
    position: absolute;
    background-color: white;
    max-height: 100%;
    overflow-y: auto;
    top: 80px;
    left: 10px;
    width: 280px;
  }

  .input-card{
    float: right;
  }

  .amap-icon img {
    width: 25px;
    height: 34px;
  }
  .custom-input-card .btn {
    margin-right: 1rem;
  }

  .custom-input-card .btn:last-child {
    margin-right: 0;
  }

  .info-title {
    color: white;
    font-size: 14px;
    background-color: #25A5F7;
    line-height: 26px;
    padding: 0px 0 0 6px;
    font-weight: lighter;
    letter-spacing: 1px
  }

  .info-content {
    font: 12px Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial;
    padding: 4px;
    color: #666666;
    line-height: 23px;
  }

  .info-content img {
    float: left;
    margin: 3px;
  }

  .amap-info-combo .keyword-input{
    height: 25px;
    border-radius: 2px 0 0 2px;
  }
  .amap-info-content.amap-info-outer{
    padding: 1px;
  }


</style>
