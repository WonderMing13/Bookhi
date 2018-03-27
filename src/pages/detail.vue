<template>
    <div class="detail-wrap">
         <div class="detail-left">
             <div class="product-board">  
                   <img :src="productIcon"/>
                   <ul>
                     <router-link v-for="(item,index) in products" :key="index" :to="{ path: item.path }" tag="li" active-class="active">
                         {{ item.name }}
                     </router-link>
                  </ul>
             </div>
         </div>

         <div class="detail-right">
              <keep-alive>
                  <router-view></router-view>
              </keep-alive>
         </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                products:[
                    {
                        name: '分类统计',
                        path: 'count',
                        active: false
                    },
                    {
                        name: '社区评论',
                        path: 'comment',
                        active: false
                    },
                    {
                        name: '推广分享',
                        path: 'share',
                        active: false
                    },
                    {
                        name: '物流查询',
                        path: 'logistics',
                        active: false
                    }
                ],
                
                imgList: {
                    '/detail/count': require('../assets/1.png'),
                    '/detail/comment': require('../assets/2.png'),
                    '/detail/share': require('../assets/3.png'),
                    '/detail/logistics': require('../assets/4.png')
                }
            }
        },
        computed: {
            productIcon:function () {
                return this.imgList[this.$route.path]
            }
        }
    }
</script>

<style>
.detail-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 20px;
}
.detail-left {
  float: left;
  width: 200px;
  text-align: center;
}
.detail-right {
  float: left;
  width: 980px;
  margin-left: 20px;
}
.product-board {
  background: #fff;
  padding: 20px 0;
}
.product-board ul {
  margin-top: 20px;
}
.product-board li {
  text-align: left;
  padding: 10px 15px;
  cursor: pointer;
}
.product-board li.active,
.product-board li:hover {
  background: #4fc08d;
  color: #fff;
}
.product-board li a {
  display: block;
}
</style>