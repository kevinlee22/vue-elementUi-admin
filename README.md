# manage-system #
基于Vue.js 2.x系列 + Element UI 的后台管理系统雏形
## 数据说明
    侧边导航栏的栏目数据是本地的，真正项目需要请求后台API
    点击导航栏目下的具体分类，根据路由跳转到相应组件，
    组件接收到路由参数，根据参数请求后台API，获取数据，填充到
    组件自身的表格中。这里仅做了当前位置和路由的匹配。
## 目录结构介绍 ##

	|-- build                            // webpack配置文件
	|-- config                           // 项目打包路径
	|-- src                              // 源码目录
	|   |-- components                   // 组件
	|       |-- common                   // 公共组件
	|           |-- Header.vue           // 公共头部
	|           |-- Home.vue           	 // 公共路由入口
	|           |-- Sidebar.vue          // 公共左边栏
	|		|-- page                   	 // 主要路由页面
	|           |-- BaseCharts.vue       // 基础图表
	|           |-- BaseForm.vue         // 基础表单
	|           |-- BaseTable.vue        // 基础表格
	|           |-- Login.vue          	 // 登录
	|           |-- Markdown.vue         // markdown组件
	|           |-- MixCharts.vue        // 混合图表
	|           |-- Readme.vue           // 自述组件
	|           |-- Upload.vue           // 图片上传
	|           |-- VueEditor.vue        // 富文本编辑器
	|           |-- VueTable.vue         // vue表格组件
	|   |-- App.vue                      // 页面入口文件
	|   |-- main.js                      // 程序入口文件，加载各种公共组件
	|-- .babelrc                         // ES6语法编译配置
	|-- .editorconfig                    // 代码编写规格
	|-- .gitignore                       // 忽略的文件
	|-- index.html                       // 入口html文件
	|-- package.json                     // 项目及工具的依赖配置文件
	|-- README.md                        // 说明


## 安装步骤 ##
	git clone https://github.com/kevinlee22/vue2.x-Element-UI-.git		// 把模板下载到本地
	cd manage-system											// 进入模板目录
	npm install													// 安装项目依赖，等待安装完成之后
## 本地开发 ##
	// 开启服务器，浏览器访问 http://localhost:8080
	npm run dev
## 构建生产 ##
	// 执行构建命令，生成的dist文件夹放在服务器下即可访问
	npm run build
 