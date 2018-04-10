<template>
      <div class="wrap">
         <div class="bookprogress" v-if="ok">
               <el-progress type="circle" :percentage="100" status="success"></el-progress>
               <div class="success">成功</div>
         </div>

          <div class="bookunprogress" v-else>
               <el-progress type="circle" :percentage="100" status="exception"></el-progress>
               <div class="failure">失败</div>
          </div> 
      </div>
</template>

<script>
   export default {
        data(){
            return{
                  ok:true
            }
        }
   }
</script>

<style>
   .wrap {
       background-color: #fff;
   }

   .bookprogress {
         padding:150px 400px;
   }

   .bookunprogress {
          padding:150px 400px;
   }
   .success {
         padding:30px 35px;
         font-size: 28px;
   }

   .failure {
         padding:30px 35px;
         font-size: 28px;
   }
</style>