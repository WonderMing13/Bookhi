<template>
     <div class="main">
          <div class="query">
               <el-form :label-position="top" label-width="80px" :model="formLabelAlign">
                     <el-form-item label="名称">
                         <el-input v-model="formLabelAlign.name"></el-input>
                     </el-form-item>
               </el-form>
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