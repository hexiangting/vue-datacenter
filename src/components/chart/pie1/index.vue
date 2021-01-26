<template>
  <div id="pie-container">
    <div class="d-flex pt-2 pl-2">
      <span style="color:#5cd9e8">
        <!-- <icon name="chart-bar"></icon> -->
      </span>
      <div class="d-flex">
        <span class="fs-xl text mx-2">商品营销</span>
        <dv-decoration-6 style="width:1.15rem;height:.25rem; position:relative;top:-.0375rem;" />
      </div>
    </div>
    <div class="pie1" ref="pie1" ></div>
  </div>
</template>

<script>
export default {
  name: 'pie1',
  data () {
    return {

    }
  },
  mounted () {
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    init () {
      var pie1 = this.$echarts.init(this.$refs.pie1);
      var scaleData = [
          { 'name': '查看次数', 'value': 19 },
          { 'name': '推荐次数', 'value': 24 },
          { 'name': '试用次数', 'value': 15 },
          { 'name': '购买次数', 'value': 10 }

        ];
        var rich = {
        white: {
            color: '#ddd',
            align: 'center',
            padding: [5, 0]
        }
        };
        var placeHolderStyle = {
        normal: {
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            color: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 0
        }
        };
        var data = [];
        for (var i = 0; i < scaleData.length; i++) {
        data.push({
            value: scaleData[i].value,
            name: scaleData[i].name,
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    shadowBlur: 30,
                    borderColor: new this.$echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                        offset: 0,
                        color: '#7777eb'
                    }, {
                        offset: 1,
                        color: '#70ffac'
                    }]),
                    shadowColor: 'rgba(142, 152, 241, 0.6)'
                }
            }
        }, {
            value: 4,
            name: '',
            itemStyle: placeHolderStyle
        });
        }
        var seriesObj = [{
        name: '',
        type: 'pie',
        clockWise: false,
        radius: [95, 100],
        hoverAnimation: false,
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'outside',
                    color: '#ddd',
                    formatter: function(params) {
                        var percent = 0;
                        var total = 0;
                        for (var i = 0; i < scaleData.length; i++) {
                            total += scaleData[i].value;
                        }
                        percent = ((params.value / total) * 100).toFixed(0);
                        if(params.name !== '') {
                            return params.name + '\n{white|' + '占比' + percent + '%}';
                        }else {
                            return '';
                        }
                    },
                    rich: rich
                },
                labelLine: {
                    show: false
                }
            }
        },
        data: data
        }];
        var option = {
        // backgroundColor: '#04243E',
        tooltip: {
            show: false
        },
        legend: {
            show: false
        },
        toolbox: {
            show: false
        },
        series: seriesObj
        }

      pie1.setOption(option);
      window.addEventListener("resize", function() {
        pie1.resize();
      });
    }
  }
}
</script>

<style lang="scss" scoped>
#pie-container {
    padding: 0.2rem;
    min-width: 1.0rem;
    border-radius: 0.0625rem;

    .text {
        color: #c3cbde;
        font-size: 0.2rem;
    }

    .pie1 {
        padding: 10px 0px;
        /* width: 80%; */
        width: 100%;
        height: 3.75rem;
        z-index: 9;
    }
}
</style>
