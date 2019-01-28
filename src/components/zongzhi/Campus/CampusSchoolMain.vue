<template>
  <div>
    <el-row class="mainRight">
      <el-col :span="24" class="borderBottom">
        学校列表
      </el-col>
    </el-row>
    <el-row style="padding-left: 30px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="学校名称:">
            <el-input v-model="formInline.name" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="学校类型:">
            <el-select v-model="formInline.kind" placeholder="请选择">
              <el-option label="幼儿园" value="幼儿园"></el-option>
              <el-option label="小学" value="小学"></el-option>
              <el-option label="普通高中" value="普通高中"></el-option>
              <el-option label="普通高等学校" value="普通高等学校"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="search">
            <el-button type="primary" size="small"><img :src="search" alt="" style="margin-right: 8px;">查询</el-button>
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
        type="selection">
      </el-table-column>
      <el-table-column
        fixed
        prop="id"
        label="所属网格"
        min-width="12%">
      </el-table-column>
      <el-table-column
        prop="name"
        label="学校名称"
        min-width="13%">
      </el-table-column>
      <el-table-column
        prop="kind"
        label="学校类型"
        show-overflow-tooltip
        min-width="12%">
      </el-table-column>
      <el-table-column
        prop="address"
        label="学校地址"
        min-width="13%">
      </el-table-column>
      <el-table-column
        prop="num"
        label="在校人数"
        min-width="10%">
      </el-table-column>
      <el-table-column
        prop="headName"
        label="校长姓名"
        min-width="10%">
      </el-table-column>
      <el-table-column
        prop="secName"
        label="安保负责人姓名"
        min-width="10%">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        sortable
        min-width="40%">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)"size="small" >详情</el-button>
          <el-button @click="handleClick(scope.row)" size="small">编辑</el-button>
          <el-button @click="deleteRow(scope.$index,tableData)"size="small">移除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row style="background: #fff;padding-bottom:40px;margin-top:200px;">
      <el-col :span="24">
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[5,10]"
            :page-size="10"
            :page-count="2"
            layout="prev, pager,next, jumper, total, sizes"
            :total="5">
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
        search:require('../../images/search.png'),
        add:require('../../images/add.png'),
        formInline: {
          kind: '',
          name: '',
        },
        currentPage4: 1,
        tableData: [
          {
          id: '九庄镇政法委',
          name: '九庄镇幼儿园',
          kind: '幼儿园',
          address: '顺泰幼儿园',
          num: '234',
          headName: '王天',
          secName: '赵斌',
          zip: 200333
        }, {
          id: '开阳县政法委',
          name: '开阳县小学',
          kind: '小学',
          address: '田镇街道',
          num: '400',
          headName: '王白石',
          secName: '王东',
          zip: 200333
        }, {
          id: '久安乡政法委',
          name: '久安乡小学',
          kind: '小学',
          address: '开发区小学',
          num: '234',
          headName: '王天',
          secName: '赵斌',
          zip: 200333
        }, {
          id: '大石乡政法委',
          name: '大石乡小学',
          kind: '普通高中',
          address: '天桥区中学',
          num: '234',
          headName: '王天',
          secName: '赵斌',
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
