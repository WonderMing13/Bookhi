<template>
  <el-carousel :interval="4000" type="card" height="220px">
    <el-carousel-item v-for="item in listImg" :key="item" :style="{ backgroundImage:'url(' + item.url + ')'}">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
   props:['listImg']
}
</script>

<style>
  
  .el-carousel__item:nth-child(2n) {
    height: 220px;
    width: 700px;
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    height: 220px;
    width: 700px;
    background-color: #d3dce6;
  }
</style>