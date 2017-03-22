<template>
    <div class="search">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item>
    <el-select v-model="formInline.region" placeholder="车型选择">
      <el-option label="帕萨特" value="shanghai"></el-option>
      <el-option label="科鲁兹" value="beijing"></el-option>
    </el-select>
  <el-form-item>
    <el-input v-model="formInline.user" placeholder="请输入关键字"></el-input>
  </el-form-item>
  </el-form-item><el-form-item>
    <el-button type="primary" @click="onSubmit">确认搜索</el-button>
  </el-form-item>
</el-form>

    </div>
</template>

<script>
   export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
<style scoped>
   
</style>