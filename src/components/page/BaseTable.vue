<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i>当前位置</el-breadcrumb-item>
                <el-breadcrumb-item id="currentPos">{{currentPosition}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="日期" sortable width="150">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址" :formatter="formatter">
            </el-table-column>
            <el-table-column prop="tag" label="标签" width="120"
                    :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
                    :filter-method="filterTag">
                <template scope="scope">
                    <el-tag :type="scope.row.tag === '家' ? 'primary' : 'success'" close-transition>{{scope.row.tag}}
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="180">
                <template scope="scope">
                    <el-button size="small"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small" type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination
                    layout="prev, pager, next"
                    :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        created(){
            var a = window.location.hash.replace('#/','');
            console.log(this.$route);
            this.currentPosition = this.items[a];
        },
        data() {
            return {
                currentPosition:'',
                tableData: [{
                    date: '2017-02-02',
                    name: '小天才',
                    address: '东莞市长安镇步步高大道18号',
                    tag: '家'
                }, {
                    date: '2017-02-04',
                    name: '小天才',
                    address: '东莞市长安镇步步高大道17号',
                    tag: '公司'
                }, {
                    date: '2017-02-01',
                    name: '小天才',
                    address: '东莞市长安镇步步高大道19号',
                    tag: '家'
                }, {
                    date: '2017-02-03',
                    name: '小天才',
                    address: '东莞市长安镇步步高大道16号',
                    tag: '公司'
                }],
                 items:{
                        "baojia":"租车订单报价",
                        "zhipai":"租车订单指派",
                         "liebiao":"租车订单列表",
                        "anpai":"车辆司机安排",
                         "guanli":"租车产品管理",
                        "shezhi":"租车系统设置",
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
        },
        methods: {
            formatter(row, column) {
                return row.address;
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            handleEdit(index, row) {
                this.$message('编辑第'+(index+1)+'行');
            },
            handleDelete(index, row) {
                this.$message.error('删除第'+(index+1)+'行');
            }
        }
    }
</script>
<style scoped>
   
</style>