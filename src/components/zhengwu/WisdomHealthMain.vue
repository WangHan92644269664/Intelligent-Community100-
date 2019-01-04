<template>
  <div>
    <el-row class="mainRight">
      <el-col :span="24" class="borderBottom">
        健康档案列表
      </el-col>
    </el-row>
    <el-row style="padding-left: 30px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="姓名:">
            <el-input v-model="formInline.name"></el-input>
          </el-form-item>
          <el-form-item label="性别:">
            <el-select v-model="formInline.sex" placeholder="请选择">
              <el-option label="男" value="male"></el-option>
              <el-option label="女" value="female"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-input v-model="formInline.id" ></el-input>
          </el-form-item>
          <el-form-item class="search">
            <el-button type="primary" size="small"><img :src="search" alt="" style="margin-right: 8px;">查询</el-button>
            <el-button type="primary" size="small"><img :src="reset" alt="" style="margin-right: 8px;">重置</el-button>
            <el-button type="primary" size="small"><img :src="add" alt="" class="add">添加</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      border
      style="width:96%;margin:0 auto"
    >
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        fixed
        prop="name"
        label="姓名"
        width="200">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        width="120">
      </el-table-column>
      <el-table-column
        prop="date"
        label="出生日期"
        width="250">
      </el-table-column>
      <el-table-column
        prop="photo"
        label="联系电话"
        width="180">
      </el-table-column>
      <el-table-column
        prop="id"
        label="身份证号码"
        width="200">
      </el-table-column>
      <el-table-column
        prop="content"
        label="测量内容"
        width="250">
      </el-table-column>
      <el-table-column
        prop="value"
        label="测量值"
        width="200">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="200">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" plain size="small">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row style="background: #fff;padding-bottom:40px;margin-top:90px;">
      <el-col :span="24">
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[1,2,3,4,5,6,7,8,9,10,11,12]"
            :page-size="10"
            :page-count="2"
            layout="prev, pager,next, jumper, total, sizes"
            :total="11">
          </el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        search:require('../images/search.png'),
        add:require('../images/add.png'),
        reset:require('../images/reset.png'),
        formInline: {
          name: '',
         sex: '',
          id:''
        },
        currentPage4: 1,
        tableData: [
          {
            name: '黄并肩',
            sex: '男',
            date: '2018-11-17 11:34:16',
            content:'血尿酸测量',
            id:'*******10000',
            photo: '15455545555',
            value:'3.36',
          },{
            name: '黄并肩',
            sex: '男',
            date: '2018-11-17 11:34:16',
            content:'血尿酸测量',
            id:'*******10000',
            photo: '15455545555',
            value:'3.36',
          }, {
            name: '黄并肩',
            sex: '男',
            date: '2018-11-17 11:34:16',
            content:'血尿酸测量',
            id:'*******10000',
            photo: '15455545555',
            value:'3.36',
          }, {
            name: '黄并肩',
            sex: '男',
            date: '2018-11-17 11:34:16',
            content:'血尿酸测量',
            id:'*******10000',
            photo: '15455545555',
            value:'3.36',
          },
          {
            name: '黄并肩',
            sex: '男',
            date: '2018-11-17 11:34:16',
            content:'血尿酸测量',
            id:'*******10000',
            photo: '15455545555',
            value:'3.36',
          },
          {
            name: '黄并肩',
            sex: '男',
            date: '2018-11-17 11:34:16',
            content:'血尿酸测量',
            id:'*******10000',
            photo: '15455545555',
            value:'3.36',
          },
        ],
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleClick(row) {
        console.log(row);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
    },
    mounted() {
    }
  }
</script>
<style scoped>
  .cell .el-button:first-child{
    background: none;
    border:1px solid #999
  }
</style>
