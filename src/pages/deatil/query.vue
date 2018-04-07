<template>
     <div class="main">
          <div class="query">
               <el-input v-model="input" placeholder="请输入快递单号"></el-input>
               <el-button type="primary" icon="el-icon-search">搜索</el-button>
          </div>
     </div>
</template>

<script>
 export default {
     data(){
         return {
             input:''
         }
     }
 }
</script>

<style scoped>
  .main {
      background:#fff;
  }

  .query{
      padding:30px 40px;
  }
</style>