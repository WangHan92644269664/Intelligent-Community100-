<template>
  <div>
    <el-row  class="mainRight">
      <el-col :span="24" class="borderBottom">
        部件列表
      </el-col>
    </el-row>
    <el-row style="padding-left: 30px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="部件名称:">
            <el-input v-model="formInline.name" ></el-input>
          </el-form-item>
          <el-form-item label="部件类型:">
            <el-select v-model="formInline.kind" placeholder="请选择">
              <el-option label="路灯" value="路灯"></el-option>
              <el-option label="健身器材" value="健身器材"></el-option>
              <el-option label="宣传栏" value="宣传栏"></el-option>
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
      stripe
      style="width:96%;margin:0 auto"
    >
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        sortable
        prop="id"
        label="编号"
        min-width="11%">
      </el-table-column>
      <el-table-column
        prop="network"
        label="所属网格"
        min-width="13%">
      </el-table-column>
      <el-table-column
        prop="name"
        label="部件名称"
        min-width="13%">
      </el-table-column>

      <el-table-column
        prop="kind"
        label="部件类型"
        min-width="12%">
      </el-table-column>
      <el-table-column
        prop="isFlag"
        label="是否标记"
        min-width="12%"
        column-key="isFlag"
        :filters="[{text:'已标记',value:'已标记'},{text:'未标记',value:'未标记'}]"
        align="center"
      >
        <template slot-scope="scope">
            <span :class="{red:scope.row.isFlag==='未标记',blue:scope.row.isFlag==='已标记'}">
              {{scope.row.isFlag}}
            </span>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        min-width="30%">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" size="small">编辑</el-button>
          <el-button @click="deleteRow(scope.$index,tableData)"size="small">移除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row style="background: #fff;padding-bottom:40px;margin-top:120px;">
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
        formInline: {
         name:'',
          kind:''
        },
        currentPage4: 1,
        tableData: [
          {
            id:'A001',
            network:'平西路社区',
            name:'路灯一号',
            kind:'路灯',
            isFlag:'未标记',
          },
          {
            id:'A002',
            network:'开发区',
            name:'器材二号',
            kind:'健身器材',
            isFlag:'已标记',
          },
          {
            id:'A003',
            network:'舜泰二号网格',
            name:'宣传栏一号',
            kind:'宣传栏',
            isFlag:'已标记',
          },
          {
            id:'A004',
            network:'天桥办事处',
            name:'宣传栏二号',
            kind:'宣传栏',
            isFlag:'未标记',
          },
          {
            id:'A005',
            network:'开发区',
            name:'路灯三号',
            kind:'路灯',
            isFlag:'已标记',
          },
          {
            id:'A006',
            network:'开发区',
            name:'垃圾桶',
            kind:'垃圾桶',
            isFlag:'未标记',
          },
          {
            id:'A007',
            network:'天桥办事处',
            name:'路灯二号',
            kind:'路灯',
            isFlag:'已标记',
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
  }
</script>
<style>

</style>
<style scoped>
  .red{
    color:#ff813d
  }
  .blue{
    color:#008aff;
  }
 .cell .el-button:first-child{
   background: none;
   border:1px solid #ff813d;
   color:#ff813d
  }
 .cell .el-button:nth-child(2){
   background: none;
   border:1px solid #008aff;
   color:#008aff;
 }

</style>
