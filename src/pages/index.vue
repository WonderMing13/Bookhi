<template>
   <div class="index-wrap">
         <div class="index-left">
             <div class="index-left-block">
                 <h2>全部书籍</h2>

                <template v-for="product in productList">
                  <h3>{{ product.title }}</h3>
                  <ul>
                     <li v-for="item in product.list">
                         <a :href="item.url">{{ item.title }}</a>
                         <span v-if="item.hot" class="hot-tag">HOT</span>
                     </li>
                  </ul>
                  <div v-if="!product.last" class="hr"></div>
                </template>
             </div>

                <div class="index-left-block lastest-news">
                   <h2>最新消息</h2>
                     <ul>
                         <li v-for="item in newsList">
                             <a :href="item.url">{{ item.title }}</a>
                         </li>
                     </ul>
                </div>
        </div>

                <div class="index-right">
                    <slideshow :listImg ="listImg"></slideshow>
                    <div class="index-board-list">
                        <div class="index-board-item" v-for="(item,index) in boardList" :class="[{'line-last' : index % 2 !== 0},'index-board-' + item.id ]">
                            <div class="index-board-item-inner">
                                <h2>{{ item.title }}</h2>
                                 <p>{{ item.description }}</p>
                                 <div class="index-board-button">
                                     <a href="" class="button">立即购买</a>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
   </div>
</template>

<script>
import slideShow from '../components/slideShow'
export default {
   created: function () {
       this.$http.post('http://localhost:8080/api/foods').then(function(data){
           console.log(data)
       },function(err){
           console.log(err)
       })
   },
   data() {
       return {
           listImg:[
               {
                  url:require('../assets/f1.jpg')                 
               },
               {
                  url:require('../assets/f2.jpg')
               },
               {
                  url:require('../assets/f3.jpg')    
               },
               {
                  url:require('../assets/f4.jpg')  
               },
               {
                  url:require('../assets/f5.jpg')
               }
           ],
           boardList:[
             {
                id: 1,
                title: '分类统计',
                description: '根据综合数据显示哪本书籍最适合读者看',
                saleout: false
             },
             {
                id: 2,
                title: '社区评论',
                description: '针对某本书籍读者给予真实的感受',
                saleout: false
             },
             {
                id: 3,
                title: '推广分享',
                description: '可以分享微博微信QQ等信息',
                saleout: false
             },
             {
                id: 4,
                title: '物流选择',
                description: '选择书嗨的专属物流或者其他',
                saleout: false
             }
           ],
           newsList: [
               {
                  title: '充值满200减100',
                  url:'www.baidu.com'
               },
               {
                   title: '天蚕土豆读者见面会',
                   url:'www.baidu.com'
               },
               {
                   title: '微信支付宝可支付电子书啦',
                   url:'www.baidu.com'
               },
               {
                   title: '海沧地区开展读书交流会',
                   url:'www.baidu.com'
               }
           ],
           productList: {
               electronic:{
                   title: '电子书籍',
                   list: [
                       {
                           title: '武侠世界',
                           url: 'www.baidu.com'
                       },
                       {
                           title: '都市生活',
                           url: 'www.baidu.com'
                       },
                       {
                           title: '现实推理',
                           url: 'www.baidu.com'
                       },
                       {
                           title: '科幻未来',
                           url: 'www.baidu.com'
                       }
                   ]
               },
               paper:{
                    title: '纸质书籍',
                    last: true,
                    list: [
                        {
                            title: '高等数学',
                            hot: true,
                            url:'www.baidu.com'
                        },
                        {
                            title: '线性代数',
                            url:'www.baidu.com'
                        },
                        {
                            title: 'Java程序设计基础',
                            url:'www.baidu.com'
                        },
                        {
                            title: '离散数学',
                            url:'www.baidu.com'
                        }
                    ]
               }
           }
       }
   },
   components:{
       'slideshow':slideShow
   }
}
</script>

<style scoped>
.index-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.index-left {
  float: left;
  width: 300px;
  text-align: left;
}
.index-right {
  float: left;
  width: 900px;
}
.index-left-block {
  margin: 1px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
}
.index-left-block .hr {
  margin-bottom: 20px;
}
.index-left-block h2 {
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block li {
  padding: 5px;
}
.index-board-list {
  overflow: hidden;
}
.index-board-item {
  float: left;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
}
.index-board-1 .index-board-item-inner{
  background: url(../assets/1.png) no-repeat;
}
.index-board-2 .index-board-item-inner{
  background: url(../assets/2.png) no-repeat;
}
.index-board-3 .index-board-item-inner{
  background: url(../assets/3.png) no-repeat;
}
.index-board-4 .index-board-item-inner{
  background: url(../assets/4.png) no-repeat;
}
.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last {
  margin-right: 0;
}
.index-board-button {
  margin-top: 20px;
}
.lastest-news {
  min-height: 512px;
}
.hot-tag {
  background: red;
  color: #fff;
}
.new-item {
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
