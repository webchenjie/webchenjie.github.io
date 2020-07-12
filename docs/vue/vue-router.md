---
title: vue-router
date: 2020-07-12
---

``` js
// vue-router
1. vue-router默认的url加上#/为哈希,最好用history
2. route它是指一条路由
3. routes它是指一组路由
4. router它是一个机制,用来管理路由
5. 使用this.$route.query.参数名获取到的url参数,第一次获取到的值的类型时传递过来的类型
6. 刷新后获取到的值的类型则是String,因为路由没有变,直接取url上的
7. const routes = [
     { path: '/home', component: home },
     { path: '/login', component: login },
     { path: '/', redirect: '/home' } // 重定向,默认进入home页面
   ]
   var router = new Router( { routes })
   在html中使用<router-view></router-view>
8. export default () => {
      return new Router({
        routes, // 一组路由
        mode: 'histoty', // 把路由中默认加的#去掉
        base: '/base/', // 在使用跳转时在路径前面加上/base/
        linkActiveClass: 'active-link', // 当当前路由一部分和to="..."一样时会给元素加上这个类名,给<router-link>增加样式
        linkExactActiveClass: 'exact-active-link', // 当当前路由完全和to="..."一样时会给元素加上这个类名,给<router-link>增加样式
        scrollBehavior(to, from, savePosition) {
          // 进入页面时滚动到上次浏览的位置
          // to去哪个页面,from从哪里来,savePosition历史记录上次的位置
          if (savePosition) {
            return savePosition
          } else {
            return { x: 0, y: 0 }
          }
        },
        parseQuery(query) {
          // 字符串查询转为对象
        },
        stringifyQuery(obj) {
          // 对象查询转为字符串
        },
        fallback: true // 有的浏览器不能使用history会自动转为hash模式
      })
   }
9. 在routes中可以在组件中用this.$route获取url上的内容
   const routes = [{
     path: '/home/':id,
     component: () => import('路径') // 进行懒加载,在组件注册时也可用
     name: 'home', // 在<router-link :to="{ name: 'home' }">
     meta: {
       title: 'this is home',
       description: ''
     },
     children: [{ // 嵌套路由,在用children中需在所对应的组件中用<router-view>占位
       path: '/homeChildren,
       component: homeChildren,
     }],
     props: true,
     props: route => {
       id: route.query.id // 在组件中直接使用this.id,而不用使用this.$route.query.id
     }
   }]
10. 在<transition name="fade"><router-view /></transition> // 可以用过渡动画
11. 一个页面两个<router-view>对应不同的组件
    <router-view />
    <router-view name="g1" />
    const routes = [{
      path: '/home',
      components: {
        default: home, // 没name
        g1: homeg1 // 有name="g1"
      }
    }]
----------------------------------------------------------------------------------------------
// 导航守卫
1. 导航守卫: 类型中间件,进入路由前先通过守卫,进行操作,进入页面
2. 全局守卫: 在定义router的地方定义,main.js
   router.beforEach((to, from, next) => { console.log('beforEach') next() }) // 前置守卫
   router.beforResolve((to, from, next) => { console.log('beforResolve') next() }) // 解析守卫
   router.afterEach((to, from) => { console.log('afterEach') }) // 后置守卫
3. 路由独享守卫: 在路由内定义
   const routes = [{
     path: '/home',
     components: home,
     beforeEnter: (to, from, next) => { console.log('beforeEnter') next() }
   }]
4. 组件内的守卫: 在组件内定义
   beforeRouteEnter(to, from, next) {
     // 在渲染该组件的对应路由被confirm(弹框)前调用
     // 不能获取组件实例this,因为在守卫执行前,组件实例还没创建
     // 可用这个守卫给next传值 
     console.log('beforeRouteEnter')
     next()
   }
   beforeRouteUptate(to, from, next) {
     // 同一个组件但是id不同: abc/123到abc/456,生命周期不会重新执行,而这个可以,重用的组件
     console.log('beforeRouteUptate')
     next()
   }
   beforeRouteLeave(to, from, next) { console.log('beforeRouteLeave') next() }
----------------------------------------------------------------------------------------------
// 完整的导航解析流程
1. 导航被触发
2. 在失活的组件里调用beforeRouteLeave守卫
3. 调用全局的beforEach守卫
4. 在重用的组件里调用beforeRouteUpdate守卫
5. 在路由配置里调用beforeEnter守卫
6. 解析异步路由组件
7. 在被激活的组件中调用beforeRouteEnter守卫
8. 调用全局的beforeResolve守卫
9. 导航被确认调用全局的afterEach守卫
10. 触发DOM更新

```