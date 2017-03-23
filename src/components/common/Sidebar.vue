<template>
    <div class="sidebar">
    <div class="mask"></div>
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <el-submenu v-for="(value,key) in items" :index="key">
                <template slot="title"><i class="el-icon-date"></i>{{key}}</template>
                <el-menu-item v-for="(detail,item) in value" :index="item">{{detail}}</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>
    
<script>
    export default {
        data(){
            return {
                index:3,
                items:{
                    "租车管理":{
                        "baojia":"租车订单报价",
                        "zhipai":"租车订单指派",
                         "liebiao":"租车订单列表",
                        "anpai":"车辆司机安排",
                         "guanli":"租车产品管理",
                        "shezhi":"租车系统设置"
                    },
                    "产品管理":{
                         "faxing":"产品发行",
                         "cpgl":"产品管理",
                         "dbgl":"产品打包管理",
                         "xmgl":"增值项目管理",
                         "tggl":"动态通告管理",
                         "xtsz":"租车系统设置",
                         "dzb":"长隆产品对照表",
                         "jdgl":"速8供应商酒店管理",
                         "bjgl":"酒店报价管理",
                         "tjb":"库存统计表",
                         "xhjd":"星海酒店绑定",
                         "gys":"供应商产品接入"
                    }
                    }
            }
        },
        methods:{
          
        },
        computed:{
            onRoutes(){
            console.log(this.$route.path);
                var a = this.$route.path.replace('/','');
                console.log(a);
                return a
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 220px;
        left: 0;
        top: 100px;
        bottom:0;
        overflow: auto;
        /*background: #2E363F;*/
        /*background-color: #324157;*/
    }
    .sidebar > ul {
        max-height: 3000px;
    }
    .sidebar .is-active {
        font-weight: 800;
    }
    .mask {
        width: 220px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        background-color: #324157;
    }
</style>
