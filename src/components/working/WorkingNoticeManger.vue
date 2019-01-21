<template>
  <div>
    <el-row class="mainRight">
      <el-col :span="24" class="borderBottom">
        公告管理列表
      </el-col>
    </el-row>
    <el-row style="padding-left: 30px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="选择日期:">
            <el-col :span="24">
              <el-form-item prop="date">
                <el-date-picker type="date" placeholder="2018-10-10" v-model="formInline.date"
                                style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="关键字" prop="name">
            <el-input v-model="formInline.key" placeholder="标题或操作人"></el-input>
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
      height="380"
      style="width:96%;margin:0 auto"
    >
      <el-table-column
        type="selection">
      </el-table-column>
      <el-table-column
        prop="id"
        label="编号"
        min-width="8%">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题"
        min-width="15%">
      </el-table-column>
      <el-table-column
        prop="name"
        label="操作人"
        min-width="15%">
      </el-table-column>
      <el-table-column
        prop="isPublic"
        label="是否为群众公告"
        min-width="11%">
      </el-table-column>
      <el-table-column
        prop="time"
        label="操作时间"
        min-width="20%">
      </el-table-column>
      <el-table-column
        prop="desc"
        label="文章描述"
        min-width="20%">
      </el-table-column>
      <el-table-column
        prop="photo"
        label="电话"
        min-width="14%">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        min-width="25%">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" plain size="small">详情</el-button>
          <el-button @click="handleClick(scope.row)" type="info" size="small">编辑</el-button>
          <el-button type="success" @click="deleteRow(scope.$index,tableData)" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row style="background: #fff;padding-bottom:40px;margin-top: 100px;">
      <el-col :span="24">
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[5,6,10]"
            :page-size="6"
            :page-count="2"
            layout="prev, pager,next, jumper, total, sizes"
            :total="12">
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
          date: '',
          key: '',
        },
        currentPage4: 1,
        tableData: [
          {
          id: '12',
          title: '公告',
          name: '超级管理员',
          isPublic: '否',
          time: '2018-11-17 11:34:16',
          desc:'护路护线功能模块开发',
          photo: '15455545555',
          zip: 200333
        }, {
          id: '11',
          title: '提前下班通知',
          name: '超级管理员',
          isPublic: '否',
          time: '2018-11-17 11:34:16',
          desc:'护路护线功能模块开发',
          photo: '15455545555',
          zip: 200333
        }, {
          id: '10',
          title: '提前下班通知',
          name: '超级管理员',
          isPublic: '是',
          time: '2018-11-17 11:34:16',
          desc:'护路护线功能模块开发',
          photo: '15455545555',
          zip: 200333
        }, {
          id: '9',
          title: '放假通知',
          name: '超级管理员',
          isPublic: '否',
          time: '2018-11-17 11:34:16',
          desc:'护路护线功能模块开发',
          photo: '15455545555',
          zip: 200333
        },
          {
            id: '8',
            title: '版本升级公告',
            name: '超级管理员',
            isPublic: '否',
            time: '2018-11-17 11:34:16',
            desc:'护路护线功能模块开发',
            photo: '15455545555',
            zip: 200333
          },
          {
            id: '7',
            title: '社区下发服务通知',
            name: '超级管理员',
            isPublic: '否',
            time: '2018-11-17 11:34:16',
            desc:'护路护线功能模块开发',
            photo: '15455545555',
            zip: 200333
          },
          {
            id: '10',
            title: '提前下班通知',
            name: '超级管理员',
            isPublic: '是',
            time: '2018-11-17 11:34:16',
            desc:'护路护线功能模块开发',
            photo: '15455545555',
            zip: 200333
          }, {
            id: '9',
            title: '放假通知',
            name: '超级管理员',
            isPublic: '否',
            time: '2018-11-17 11:34:16',
            desc:'护路护线功能模块开发',
            photo: '15455545555',
            zip: 200333
          },
          {
            id: '8',
            title: '版本升级公告',
            name: '超级管理员',
            isPublic: '否',
            time: '2018-11-17 11:34:16',
            desc:'护路护线功能模块开发',
            photo: '15455545555',
            zip: 200333
          },
          {
            id: '7',
            title: '社区下发服务通知',
            name: '超级管理员',
            isPublic: '否',
            time: '2018-11-17 11:34:16',
            desc:'护路护线功能模块开发',
            photo: '15455545555',
            zip: 200333
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
      //删除所选中的一行
      deleteRow(index,rows){
        rows.splice(index,1)
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
  .cell .el-button:nth-child(2){
    background: none;
    border:1px solid #ff813d;
    color:#ff813d
  }
  .cell .el-button:nth-child(3){
    background: none;
    border:1px solid #008aff;
    color:#008aff;
  }
</style>
