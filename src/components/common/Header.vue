<template>
    <div class="header">
        <div class="headerInfo">
            <!-- 欢迎您：北京乐乐酷科技发展有限公司（广州自我游旗下子公司） -->
            {{lang.welcome}}
        </div>
       <div class="clearfix status">
            <div class="logoimg"></div>
        <div class="logo">{{lang.title}}</div>
        <div class="user-info">
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    <!-- <img class="user-logo" src="../../../static/img/img.jpg">
                    {{username}} -->
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="loginout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div class="switch">
            <a @click="switchzh">中文</a>/
            <a @click="switchen">English</a>
        </div>
       </div>
    </div>
</template>
<script>
    import langpack from '../../lang/index.js';
    export default {
        created(){
            // this.$store.state.language
            // $store代表的是vuex的实例，
        },
        data() {
            return {
                name: 'linxin'
            }
        },
        computed:{
             lang(){
                return langpack[this.language]
            },
            username(){
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            },
            language(){
                return this.$store.state.language;
            },
        },
        methods:{
            switchzh(){
                this.$store.commit('switchzh');
            },
            switchen(){
                this.$store.commit('switchen');
            },
            handleCommand(command) {
                if(command == 'loginout'){
                    localStorage.removeItem('ms_username')
                    this.$router.push('/login');
                }
            }
        }
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 100px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
    }
    .switch {
        float: right;
        line-height: 70px;
        font-size: 22px;
        padding-right:100px;
        color: #fff;
    }
    .switch>a {
        cursor: pointer;
    }
    .switch>a:hover {
        color: #58B7FF;
    }
    .status {
        padding-left: 30px;
    }
    .headerInfo {
        width: 100%;
        height: 30px;
        background-color: #475669;
        line-height: 30px;
        font-size: 15px;
        color: #99A9BF;
    }
    .header .logoimg{
        float: left;
        width: 70px;
        height: 70px;
        background-image: url(../../../static/img/logo.jpg);
        background-size: cover;
        border-radius: 34px;
    }
    .header .logo{
        padding-left: 30px;
        float: left;
        text-align: center;
    }
    .user-info {
        float: right;
        padding-right: 50px;
        font-size: 16px;
        color: #fff;
    }
    .user-info .el-dropdown-link{
        position: relative;
        display: inline-block;
        padding-left: 50px;
        color: #fff;
        cursor: pointer;
        vertical-align: middle;
    }
    .user-info .user-logo{
        position: absolute;
        left:0;
        top:15px;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
</style>
