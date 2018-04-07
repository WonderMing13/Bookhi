<template>
    <div class="main">
          <div class="comment">
               <div class="imagelist">
                    <el-row>
                        <el-col :span="6" v-for="(o,index) in 8" :key="o" :offset="1">
                              <el-card :body-style="{padding: '0px'}">
                                   <img src="../../assets/logo.png" class="image">
                                   <div style="padding: 14px;">
                                        <span>好吃的汉堡</span>
                                        <div class="bottom clearfix">
                                             <el-rate v-model="value3" show-text></el-rate>
                                             <el-badge :value="12" class="item">
                                                   <el-button size="small">评论</el-button>
                                             </el-badge>
                                        </div>
                                   </div>
                              </el-card>
                        </el-col>
                    </el-row>
               </div>
          </div>
    </div>
</template>

<script>
export default {
   data() {
     return {
       value3:null
     }
   }
}
</script>

<style scoped>
  .main {
     background:#fff;
  }
 
  .comment {
    padding:30px 40px;
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .item {
     margin-top: 10px;
     margin-right: 40px;
   }  

  .bottom {
    margin-top: 13px;
    line-height: 10px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }
  
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both;
  }

</style>