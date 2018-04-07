<template>
    <div class="main">
         <div class="main-intro">
             <h2>发布图书信息</h2>
         </div>

         <div class="main-from">
              <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="纸质书" name="first">
                          <el-form ref="form" :model="form" label-width="80px">
                                 <el-form-item label="图书名称">
                                      <el-input v-model="form.name"></el-input>
                                 </el-form-item>
                                 <el-form-item label="作者">
                                       <el-input v-model="form.author"></el-input>
                                 </el-form-item>
                                 <el-form-item label="出版社">
                                       <el-input v-model="form.press"></el-input>
                                 </el-form-item>
                                 <el-form-item label="条形码">
                                       <el-input v-model="form.isbn"></el-input>
                                 </el-form-item>
                                 <el-form-item label="分类">
                                       <el-select v-model="form.category" placeholder="请选择一个类别">
                                             <el-option label="大一" value="one"></el-option>
                                             <el-option label="大二" value="two"></el-option>
                                             <el-option label="大三" value="three"></el-option>
                                             <el-option label="大四" value="four"></el-option>
                                       </el-select>
                                 </el-form-item>
                                 <el-form-item label="上传图片">
                                       <el-upload class="upload-demo" ref="upload" action=" " :on-preview="handlePreview" :on-remove="handleRemove" :auto-upload="false">
                                               <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                                               <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传服务器</el-button>
                                               <div slot="tip" class="el-upload_tip">只能上传jpg/png文件，且不超过500kb</div>
                                       </el-upload>   
                                 </el-form-item>
                                 <el-form-item label="出售价格">
                                       <el-input v-model="form.price"></el-input>
                                 </el-form-item>
                                 <el-form-item label="数量">
                                       <el-input v-model="form.num"></el-input>
                                 </el-form-item>
                                 <el-form-item>
                                      <el-button type="primary" @click="onSubmit">立即创建</el-button>
                                      <el-button>清空</el-button>
                                 </el-form-item>
                          </el-form>
                    </el-tab-pane>
                    <el-tab-pane label="电子书" name="second">
                          <el-form ref="form" :model="formEletronic" label-width="80px">
                                 <el-form-item label="图书名称">
                                      <el-input v-model="formEletronic.name"></el-input>
                                 </el-form-item>
                                 <el-form-item label="作者">
                                       <el-input v-model="formEletronic.author"></el-input>
                                 </el-form-item>
                                 <el-form-item label="出版社">
                                       <el-input v-model="formEletronic.press"></el-input>
                                 </el-form-item>
                                 <el-form-item label="条形码">
                                       <el-input v-model="formEletronic.isbn"></el-input>
                                 </el-form-item>
                                 <el-form-item label="分类">
                                       <el-select v-model="formEletronic.category" placeholder="请选择一个类别">
                                             <el-option label="武侠世界" value="one"></el-option>
                                             <el-option label="都市生活" value="two"></el-option>
                                             <el-option label="现实推理" value="three"></el-option>
                                             <el-option label="科幻未来" value="four"></el-option>
                                       </el-select>
                                 </el-form-item>
                                 <el-form-item label="下载积分">
                                       <el-input v-model="formEletronic.price"></el-input>
                                 </el-form-item>
                                  <el-form-item label="数量">
                                       <el-input v-model="formEletronic.num"></el-input>
                                 </el-form-item>
                                 <el-form-item>
                                      <el-button type="primary" @click="onSubmit">立即创建</el-button>
                                      <el-button>清空</el-button>
                                 </el-form-item>
                          </el-form>
                    </el-tab-pane>
              </el-tabs>
         </div>
    </div>
</template>

<script>
export default {
     data() {
         return {
             activeName: 'first',
             form:{
                 name: '',
                 author: '',
                 press: '',
                 isbn: '',
                 category: '',
                 price: '',
                 num: ''
             },
             formEletronic:{
                 name: '',
                 author: '',
                 press: '',
                 isbn: '',
                 category: '',
                 price: '',
                 num: ''
             }
         }
     },
     methods: {
         handleClick(tab,event) {
             console.log(tab,event);
         },
        submitUpload() {
           this.$refs.upload.submit();
         },
        handleRemove(file, fileList) {
            console.log(file, fileList);
         },
         handlePreview(file) {
            console.log(file);
         },
         onSubmit(){
             console.log('submit!');
         }
     }
}
</script>

<style scoped>
  .main{
      background-color: #ffffff;
  }

  .main-intro h2{
       font-size: 20px;
       padding: 20px;
  }

  .main-from {
       padding: 30px 40px;
       font-size: 16px;
  }
</style>
