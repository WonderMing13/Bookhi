<template>
    <div id="main" :style="{width: '300px',height:'300px'}">
    </div>
</template>

<script>
export default{
    mounted(){
          let myChart = this.$echarts.init(document.getElementById('main'))
          myChart.setOption({
              title:{
                  text: 'ECharts入门'
              },
              tooltip: {},
              xAxis:{
                  data: ['衬衫','羊毛衫','裤子','高跟鞋']
              },
              yAxis:{

              },
              series:[{
                  name: '销量',
                  type: 'bar',
                  data: [5,20,36,10]
              }]
          });

    }
}

</script>

<style scoped>

</style>