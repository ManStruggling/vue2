import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from './components/Home/Home';
import Goods from './components/Goods/Goods';
import Detail from './components/Detail/Detail';
import Car from './components/Car/Car';
import Log from './components/Log/Log';
import Reg from './components/Reg/Reg';
import User from './components/User/User';
import Serve from './components/Serve/Serve';
import ServeDetail from './components/ServeDetail/ServeDetail';
import ServeDetail1 from './components/ServeDetail/ServeDetail1';
import ServeDetail2 from './components/ServeDetail/ServeDetail2';
import ServeDetail3 from './components/ServeDetail/ServeDetail3';

export default new Router({
  mode: 'history',
  routes: [
    {path:'/home',component:Home},
    {path:'/goods',component:Goods},
    {path:'/serve',component:Serve},
    {path:'/user',component:User},
    {path:'/log',component:Log},
    {path:'/reg',component:Reg},
    {path:'/car',component:Car},
    {path:'/detail/:id',component:Detail},
    {path:'/servedetail/:id',component:ServeDetail,children:[
      {path:'/servedetail/:id/serve',component:ServeDetail1},
      {path:'/servedetail/:id/apply',component:ServeDetail2},
      {path:'/servedetail/:id/range',component:ServeDetail3},
      {path:'/servedetail/:id/',redirect:'/servedetail/:id/serve'}
    ]},
    {path:'/',redirect:'/home'}
  ]
})
