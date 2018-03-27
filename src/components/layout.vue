<template>
  <div>
      <div class="bk-header">
          <div class="bk-header-inner">
            <router-link :to="{path: '/'}">
              <img src="../assets/logo.png">
            </router-link>
            <div class="head-nav">
               <ul class="nav-list">
                 <li><el-button type="text" @click="LoginFormVisible = true">登录</el-button></li>
                 <li class="nav-pile"> | </li>
                 <li><el-button type="text" @click="RegisterFormVisible = true">注册</el-button></li>
                 <li class="nav-pile"> | </li>
                 <li><el-button type="text" @click="Aboutit">关于</el-button></li>
               </ul>
            </div>
          </div>
      </div>
      <div class="bk-content">
         <keep-alive>
            <router-view></router-view>
         </keep-alive>
      </div>
      <div class="bk-footer">
         <p>@ 2018 wonderming coding</p>
      </div>

      <el-dialog title="收货地址" :visible.sync="LoginFormVisible">
         <el-form :model="form">
            <el-form-item label="活动名称" :label-width="formLabelWidth">
               <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" :label-width="formLabelWidth">
               <el-select v-model="form.region" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
               </el-select>
           </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
           <el-button @click="LoginFormVisible = false">取 消</el-button>
           <el-button type="primary" @click="LoginFormVisible = false">确 定</el-button>
        </div>
     </el-dialog>
    
     <el-dialog title="用户注册" :visible.sync="RegisterFormVisible">
         <el-form :model="registerFrom">
             <el-form-item label="用户名" :label-width="formLabelWidth">
                 <el-input v-model="registerFrom.userId" auto-complete="off"></el-input>
             </el-form-item>

             <el-form-item label="密码" :label-width="formLabelWidth">
                   <el-input v-model="registerFrom.userPassword" auto-complete="off"></el-input>
             </el-form-item>
         </el-form>

         <div slot="footer" class="dialog-footer">
           <el-button @click="RegisterFormVisible = false">取 消</el-button>
           <el-button type="primary" @click="RegisterFormVisible = false,registerit()">确 定</el-button>
        </div>
     </el-dialog>
    
  </div>
</template>

<script>
import qs from 'qs';

export default {
       data(){
          return {
            LoginFormVisible: false,
            RegisterFormVisible:false,
            form: {
              name: '',
              region: '',
              date1: '',
              date2: '',
              delivery: false,
              type: [],
              resource: '',
              desc: ''
            },
            registerFrom: {
              userId: '',
              userPassword: ''
            },
        formLabelWidth: '120px'
      };
    },
       methods: {
         registerit(){
             console.log(this.registerFrom)
             var obj = JSON.stringify(this.registerFrom)
             console.log(obj)
             this.$ajax.post('http://localhost:8081/bookhi2/httpConn/post',(
               {info_user:{add:[obj]}}))
             .then(function(response){
               console.log(response);
             }).catch(function(error){
               console.log(error);
             });
         },
         
      Aboutit() {
        this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      }
   }
}
</script>

<style>

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
}
.bk-header {
  background: #363636;
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
  width: 100%;
}
.bk-header-inner {
  width: 1200px;
  margin: 0 auto;
}
.head-logo {
  float: left;
}
.bk-header-inner img {
  width: 50px;
  margin-top: 20px;
}
.head-nav {
  float: right;
}
.head-nav ul {
  overflow: hidden;
}
.head-nav li {
  cursor: pointer;
  float: left;
}
.nav-pile {
  padding: 0 10px;
}
.bk-footer {
  text-align: center;
  height: 80px;
  width: 100%;
  line-height: 80px;
  background: #e3e4e8;
  clear: both;
  margin-top: 30px;
}
.container {
  width: 1200px;
  margin: 0 auto;
}
.hr {
  height: 1px;
  width: 100%;
  background: #ddd;
}
.button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
.button:hover {
  background: #4fc08d;
}
.g-form {

}
.g-form-line {
  padding: 15px 0;
}
.g-form-label {
  width: 100px;
  font-size: 16px;
  display: inline-block;
}
.g-form-input {
  display: inline-block;
}
.g-form-input input {
  height: 30px;
  width: 200px;
  line-height: 30px;
  vertical-align: middle;
  padding: 0 10px;
  border: 1px solid #ccc;
}
.g-form-btn {
  padding-left: 100px;
}
.g-form-error {
  color: red;
  padding-left: 15px;
}
</style>
