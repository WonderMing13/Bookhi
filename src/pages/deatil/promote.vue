<template>
     <div class="sales-board">
          <div class="sales-board-intro">
              <h2>推广分享</h2>
              <p></p>
          </div>

          <div class="sales-board-form">
              <div class="sales-board-line">
                   <div class="sales-board-line-left">
                        购买数量:
                        <el-slider v-model="value8" show-input></el-slider>
                   </div>
                   <div class="sales-board-line-right">
                        
                   </div>
              </div>

              <div class="sales-board-line">
                   <div class="sales-board-line-left">
                       产品类型:
                        <el-select v-model="value5" multiple placeholder="请选择">
                              <el-option v-for="item in optionList" :key="item.value" :label="item.label" :value="item.value">
                              </el-option>
                        </el-select>
                   </div>
                   <div class="sales-board-line-right">

                   </div>
              </div>

              <div class="sales-board-line">
                   <div class="sales-board-line-left">
                        有效时间:
                        <el-switch v-model="value3" active-text="按月付费" inactive-text="按年付费">
                        </el-switch>
                   </div>
                   <div class="sales-board-line-right">

                   </div>
              </div>

              <div class="sales-board-line">
                   <div class="sales-board-line-left">
                        产品版本:
                        <el-select v-model="value4" clearable placeholder="请选择">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                   </div>
                   <div class="sales-board-line-right">

                   </div>
              </div>

              <div class="sales-board-line">
                   <div class="sales-board-line-left">
                        总价
                   </div>
                   <div class="sales-board-line-right">
                     
                   </div>
              </div>

              <div class="sales-board-line">
                    <div class="sales-board-line-left"></div>
                    <div class="sales-board-line-right">
                         <div class="button">
                            购买
                         </div>
                    </div>
              </div>
          </div>

          <div class="sales-board-des">
               <h2>产品说明</h2>
               <p>网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。</p>

               <h3>用户行为指标</h3>
               <ul>
                  <li>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：</li>
                  <li>用户在网站的停留时间；</li>
                  <li>用户来源网站（也叫“引导网站”）；</li>
                  <li>用户所使用的搜索引擎及其关键词；</li>
                  <li>在不同时段的用户访问量情况等。</li>
               </ul>
              
               <h3>浏览网站方式</h3>
                <ul>
                    <li>用户上网设备类型</li>
                    <li>用户浏览器的名称和版本</li>
                    <li>访问者电脑分辨率显示模式</li>
                    <li>用户所使用的操作系统名称和版本</li>
                    <li>用户所在地理区域分布状况等</li>
                </ul>
          </div>
     </div>
</template>

<script>
 export default{
     data() {
         return {
             value8: 0,
             value3: true,
             options:[{
                  value: '选项1',
                  label: '测试版'
             },{
                  value: '选项2',
                  label: '正式版'
             },{
                  value: '选项3',
                  label: '上线版'
             }],

             value5: '',
             value4: '',
             optionList: [{
                  value: '选项1',
                  label: '微信公众号'
             },{
                  value: '选项2',
                  label: '手机微营销'
             },{
                   value: '选项3',
                   label: '首页广告位'
             }]
         }
     },
     methods:{
      
     }
 }
</script>

<style scoped>
.sales-board {
  background: #fff;
}
.sales-board-intro h2 {
  font-size: 20px;
  padding: 20px;
}
.sales-board-intro p {
  background: #f7fcff;
  padding: 10px 20px;
  color: #999;
  line-height: 1.8;
}
.sales-board-form {
  padding: 30px 40px;
  font-size: 14px;
}
.sales-board-line {
  clear: both;
  padding-bottom: 20px;
}
.sales-board-line-left {
    display: inline-block;
    width: 400px;
}
.sales-board-line-right {
    display: inline-block;
    width: 75%;
}
.sales-board-des {
  border-top: 20px solid #f0f2f5;
  padding: 15px 20px;
}
.sales-board-des p {
  line-height: 1.6;
}
.sales-board-des h2 {
  font-size: 20px;
  padding-bottom: 15px;
}
.sales-board-des h3 {
  font-size: 18px;
  font-weight: bold;
  padding: 20px 0 10px 0;
}
.sales-board-des li {
  padding: 5px 0;
}
.sales-board-table {
  width: 100%;
  margin-top: 20px;
}
.sales-board-table th {
  background: #4fc08d;
  color: #fff;
}
.sales-board-table td {
    border: 1px solid #f0f2f5;
    padding: 15px;
}

</style>