import Vue from 'vue';
import Router from 'vue-router';
import login from '../components/page/Login.vue';
import home from '../components/common/Home.vue';
import baojia from '../components/items/baojia.vue';
import zhipai from '../components/items/zhipai.vue';
import liebiao from '../components/items/liebiao.vue';
import anpai from '../components/items/anpai.vue';
import guanli from '../components/items/guanli.vue';
import shezhi from '../components/items/shezhi.vue';
import faxing from '../components/items/faxing.vue';
import cpgl from '../components/items/cpgl.vue';
import dbgl from '../components/items/dbgl.vue';
import xmgl from '../components/items/xmgl.vue';
import tggl from '../components/items/tggl.vue';
import xtsz from '../components/items/xtsz.vue';
import dzb from '../components/items/dzb.vue';
import jdgl from '../components/items/jdgl.vue';
import bjgl from '../components/items/bjgl.vue';
import tjb from '../components/items/tjb.vue';
import xhjd from '../components/items/xhjd.vue';
import gys from '../components/items/gys.vue';
import form from '../components/items/form.vue';


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/home',
            component: home,
            children:[
                {
                    path: '/',
                    component: baojia
                },
                {
                    path: '/baojia',
                    component: baojia
                },
                {
                    path: '/zhipai',
                    component: zhipai
                },
                {
                    path: '/guanli',
                    component: guanli
                },
                {
                    path: '/shezhi',
                    component: shezhi
                },
                {
                    path: '/faxing',
                    component: faxing
                },
                {
                    path: '/cpgl',
                    component: cpgl
                },
                {
                    path: '/dbgl',
                    component: dbgl
                },
                {
                    path: '/xmgl',
                    component: xmgl
                },
                {
                    path: '/tggl',
                    component: tggl
                },
                {
                    path: '/xtsz',
                    component: xtsz
                },
                {
                    path: '/dzb',
                    component: dzb
                },
                {
                    path: '/jdgl',
                    component: jdgl
                },
                {
                    path: '/bjgl',
                    component: bjgl
                },
                {
                    path: '/tjb',
                    component: tjb
                },
                {
                    path: '/xhjd',
                    component: xhjd
                },
                {
                    path: '/gys',
                    component: gys
                },
                {
                    path: '/anpai',
                    component: anpai
                },
                {
                    path: '/liebiao',
                    component: liebiao
                }
            ]
        },
        {
            path: '/login',
            component: login
        },
    ]
})


                    
                    