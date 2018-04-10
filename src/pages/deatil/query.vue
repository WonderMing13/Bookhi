<template>
     <div class="main">
          <div class="query">
               <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                     <el-form-item label="快递单号">
                         <el-input v-model="formLabelAlign.order"></el-input>
                     </el-form-item>
                     <el-form-item>
                        <el-button type="primary" @click="submitForm('formLabelAlign')">查询</el-button>
                        <el-button @click="resetForm('formLabelAlign')">重置</el-button>
                     </el-form-item>
               </el-form>
          </div>
     </div>
</template>

<script>
 export default {
     data(){
         return {
            labelPosition: 'top',
            formLabelAlign: {
                order: ''
            }
         }
     },
     methods: {
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
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