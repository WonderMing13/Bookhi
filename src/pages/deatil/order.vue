<template>
    <div class="main">
        <div class="order">
             <el-table :data="tableData" style="width: 100%">
                 <el-table-column label="日期" width="180">
                    <template slot-scope="scope">
                       <i class="el-icon-time"></i>
                       <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                 </el-table-column>
                 <el-table-column label="姓名" width="180">
                    <template slot-scope="scope">
                       <el-popover trigger="hover" placement="top">
                           <p>姓名: {{ scope.row.name }}</p>
                           <p>住址: {{ scope.row.address }}</p>
                           <div slot="reference" class="name-wrapper">
                           <el-tag size="medium">{{ scope.row.name }}</el-tag>
                           </div>
                      </el-popover>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                    <el-button size="mini" @click="handleBuy(scope.$index, scope.row)">购买</el-button>
                    <el-button size="mini" @click="handleRent(scope.$index, scope.row)">租用</el-button>
                    </template>
                </el-table-column>
             </el-table>
        </div>
    </div>
</template>

<script>
export default {
   data() {
       return {
           tableData:[{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
           },{
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
           },{
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
           },{
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
           }]
       }
   },
   
   methods: {
      handleBuy(index, row) {
        console.log(index, row);
        this.$router.push({path:'/orderNext'})
      },
      handleRent(index, row) {
        console.log(index, row);
      }
    }

}
</script>

<style scoped>
   .main{
       background-color: #fff;
   }

   .order{
       padding:30px 40px;
   }
</style>
