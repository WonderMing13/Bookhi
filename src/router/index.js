import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout'
import IndexPage from '@/pages/index'
import DetailPage from '@/pages/detail'
import DetailqueryPage from '@/pages/deatil/query'
import DetailpromotePage from '@/pages/deatil/promote'
import DetailcommunityPage from '@/pages/deatil/community'
import DetailclassificationPage from '@/pages/deatil/classification'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',    
      component: IndexPage
    },
    {
      path: '/detail',
      component:DetailPage,
      redirect: '/detail/count',
      children:[
        {
          path: 'count',
          component: DetailclassificationPage
        },
        {
          path: 'comment',
          component: DetailcommunityPage
        },
        {
          path: 'share',
          component: DetailpromotePage
        },
        {
          path: 'logistics',
          component: DetailqueryPage
        }
      ]
    }
  ]
})
