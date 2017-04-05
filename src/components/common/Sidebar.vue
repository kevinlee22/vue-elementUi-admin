<template>
    <div class="sidebar">
    <div class="mask"></div>
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <el-submenu v-for="(value,key) in lang.asideNav" :index="key">
                <template slot="title"><i class="el-icon-date"></i>{{key}}</template>
                <el-menu-item v-for="(detail,item) in value" :index="item">{{detail}}</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>
    
<script>
    import langpack from '../../lang/index.js';
    export default {
        data(){
            return {
                index:3,
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
            },
            language(){
                return this.$store.state.language;
            },
            lang(){
                return langpack[this.language];
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
