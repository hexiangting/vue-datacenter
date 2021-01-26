<template>
  <div id="centreLeft1">
    <div>
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <!-- <icon name="chart-bar"></icon> -->
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">任务通过率</span>
          <dv-decoration-3 style="width:1.25rem;height:.25rem; position:relative;top:-.0375rem;" />
        </div>
      </div>
      <div class="d-flex jc-center">
        <div id="centreLeft1Chart" style="width:3.25rem; height: 2.75rem;"></div>
      </div>
      <!-- 4个主要的数据 -->
      <div class="bottom-data">
        <div class="item-box" v-for="(item,index) in numberData" :key="index">
          <div class="d-flex">
            <span class="coin">￥</span>
            <dv-digital-flop :config="item.number" style="width:2.5rem;height:.625rem;" />
          </div>
          <p class="text" style="text-align: center;">
            {{item.text}}
            <span class="colorYellow">(件)</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'centerLeft1',
  data() {
    return {
      config: {
        lineWidth: 30,
        activeRadius: "80%",
        radius: "75%",
        activeTimeGap: 2000,
        data: [
          {
            name: "周口",
            value: 55
          },
          {
            name: "南阳",
            value: 120
          },
          {
            name: "西峡",
            value: 78
          },
          {
            name: "驻马店",
            value: 66
          },
          {
            name: "新乡",
            value: 80
          }
        ]
      },
      numberData: [
        {
          number: {
            number: [15],
            toFixed: 1,
            content: "{nt}"
          },
          text: "今日构建总量"
        },
        {
          number: {
            number: [1144],
            toFixed: 1,
            content: "{nt}"
          },
          text: "总共完成数量"
        },
        {
          number: {
            number: [361],
            toFixed: 1,
            content: "{nt}"
          },
          text: "正在编译数量"
        },
        {
          number: {
            number: [157],
            toFixed: 1,
            content: "{nt}"
          },
          text: "未通过数量"
        }
      ]
    };
  },
  components: {
  },
  mounted() {
    this.changeTiming();
  },
  methods: {
    changeTiming() {
      setInterval(() => {
        this.changeNumber();
        this.draw();
      }, 3000);
    },
    changeNumber() {
      this.numberData.forEach((item, index) => {
        item.number.number[0] += ++index;
        item.number = { ...item.number };
      });
    },
    draw() {
      // 基于准备好的dom，初始化echarts实例
      this.chart = this.$echarts.init(document.getElementById("centreLeft1Chart"));

      this.chart.setOption({
        color: [
          "#37a2da",
          "#32c5e9",
          "#9fe6b8",
          "#ffdb5c",
          "#ff9f7f",
          "#fb7293",
          "#e7bcf3",
          "#8378ea"
        ],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        toolbox: {
          show: true
        },
        calculable: true,
        legend: {
          orient: "horizontal",
          icon: "circle",
          bottom: 0,
          x: "center",
          data: ["rose1", "rose2", "rose3", "rose4", "rose5", "rose6"],
          textStyle: {
            color: "#fff"
          }
        },
        series: [
          {
            name: "增值电信业务统计表",
            type: "pie",
            radius: [10, 60],
            roseType: "area",
            center: ["50%", "40%"],
            data: [
              { value: 10, name: "rose1" },
              { value: 5, name: "rose2" },
              { value: 15, name: "rose3" },
              { value: 25, name: "rose4" },
              { value: 20, name: "rose5" },
              { value: 35, name: "rose6" }
            ]
          }
        ]
      });
    }
  }
};
</script>

<style lang="scss">
#centreLeft1 {
  padding: 0.2rem;
  height: 5.125rem;
  min-width: 3.75rem;
  left: 55px;
  border-radius: 0.0625rem;
  .bg-color-black {
    height: 4.8125rem;
    border-radius: 0.125rem;
  }
  .text {
    color: #c3cbde;
  }
  .chart-box {
    margin-top: 0.2rem;
    width: 2.125rem;
    height: 2.125rem;
    .active-ring-name {
      padding-top: 0.125rem;
    }
  }

  .bottom-data {
    .item-box {
      float: right;
      position: relative;
      width: 50%;
      color: #d3d6dd;
      // 金币
      .coin {
        position: absolute;
        left: 0.1rem;
        top: 0.2125rem;
        font-size: 0.25rem;
        color: #ffc107;
      }
      .colorYellow {
        color: yellowgreen;
      }
    }
  }
}
</style>
