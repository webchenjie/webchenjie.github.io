---
title: vuex
date: 2020-07-12
---

``` js
// vuex
1. const store = new vuex.store({
    state: { count: 0 },
    mutations: { updateCount(state, num) { state.count = num }},
    action: { updateCountSync(state, num) { state.count = num }}
  })
2. 在组件中的computed中使用,获取值时写在computed中
   computed: {
     count() {
       return this.$store.state.count
     }
   }
3. 在组件中的methods中使用,通过this.$store.commit('updateCount', 1) 调用mutations操作修改state
4. getter相当于组件内的computed
   getter: {
     sum(state) {
       return state.count + 1
     }
   }
   在组件中使用this.$store.getter.sum
5. 在组件中的computed中使用简写
   computed: {
     ...mapState(['count']) // 直接使用this.count === this.$store.state.count
     ...mapState({ counter: 'count' }) // 改变名称
     ...mapState({ counter: state => state.count }) // this.counter === this.$store.state.count
     ...mapGetter(['sum']) // 直接使用this.sum === this.$store.getter.sum
     ...mapState({ summit: 'sum' }) // 改变名称
   }
6. 修改state中的数据通过mutations(同步)或actions(异步)去修改
7. actions或组件通过this.$store.commit('mutations中的函数名', '传递的参数,多个值使用对象')
8. 组件通过this.$store.dispatch('actions中的函数名', '传递的参数,多个值使用对象')
9. 在组件中的methods中使用简写
   methods: {
     ...mapMutations(['mutations中的函数名']) === this.函数名(参数) === 7
     ...mapActions(['actions中的函数名']) === this.函数名(参数) === 8
   }
10. 模块
   const store = new vuex.store({
      modules: {
        g1: {
          state: {
            count: 1
          }
        },
        g2: {
          state: {
            count: 2
          }
        }
      }
   })
11. 在组件中的computed中使用
   computed: {
     count() {
       return this.$store.g1.state.count
     }
   }
12. 在组件中的computed中简写
   computed: {
     ...mapState([g1Count: state => state.g1.count])
   }
13. 默认模块下mutations会变成全局,所以使用时和7、9一样,也可以给module: { g1: { namespaced: true }}
14. 加配置,变成模块下的,则方法需要...mapmutations(['g1/函数名']),this['g1/函数名'](参数)调用
15. 在模块中的getter有3个参数,前2个一样,第3个是全局的state
16. 在模块中的actions可以调用commit触发当前模块下的mutations
17. 如果要触发全局下的mutations则需要在第三个参数中加上 { root: true },因为加了13的配置
18. 可以通过在入口文件时的store.registerModules('c', { state: { count: 1 }})动态增加模块
19. store.unrefisterModule('c') // 解除模块
20. store.watch // 监听state变化
21. store.subcribe((mutation, state) => { '哪个mutation', 'mutation的参数' }) // 获取mutations的变化
22. store.subcribeAction((action, state) => { '哪个action', 'action的参数' }) // 获取action的变化
23. 可以实现热更新
24. 全部配置
    export default () => {
      return new Vuex.store({
        strict: true, // 只用于生产环境,不能直接修改state的值
        state: { count: 1 },
        mutations: { updateCount(state, num) { state.count = num }},
        action: { updateCountSync(state, num) { state.count = num }},
        getter: { sum(state) {  return state.count + 1 } },
        modules: {
          g1: {
            state: {
              count: 1
            }
          },
          g2: {
            state: {
              count: 2
            }
          }
        }
      })
    }
----------------------------------------------------------------------------------------------
// 注意点
vuex刷新会重置丢失数据,可以在数据中加入缓存机制解决
```