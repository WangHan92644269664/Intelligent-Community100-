<template>
  <div>
    <el-row  class="mainRight">
      <el-col :span="24" class="borderBottom">
        户籍管理列表
      </el-col>
    </el-row>
    <el-row style="padding-left: 30px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="所属房屋:">
            <el-input v-model="formInline.house" ></el-input>
          </el-form-item>
          <el-form-item label="户别:">
            <el-select v-model="formInline.kind" placeholder="请选择">
              <el-option label="非农家庭户口" value="非农家庭户口"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="万能搜索:">
            <el-input v-model="formInline.search" placeholder="户号/户主/省份证/户籍地详址"></el-input>
          </el-form-item>
          <el-form-item class="search">
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
        label="户号"
        min-width="12%">
      </el-table-column>
      <el-table-column
        prop="kind"
        label="户别"
        min-width="13%">
      </el-table-column>
      <el-table-column
        prop="housing"
        label="户主"
        min-width="12%">
      </el-table-column>

      <el-table-column
        prop="house"
        label="所属房屋"
        min-width="13%">
      </el-table-column>
      <el-table-column
        prop="card"
        label="身份证"
        min-width="15%">
      </el-table-column>
      <el-table-column
        prop="address"
        label="户籍详址"
        min-width="13%">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        min-width="30%">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)"size="small" >详情</el-button>
          <el-button @click="handleClick(scope.row)" size="small">编辑</el-button>
          <el-button @click="deleteRow(scope.$index,tableData)"size="small">移除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row style="background: #fff;padding-bottom:40px;margin-top:100px;">
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
          house:'',
          kind:'',
          search:''
        },
        currentPage4: 1,
        tableData: [
          {
            id:'154552468',
            kind:'非农家庭户口',
            housing:'胡天德',
            house:'102',
            card:'**************5134',
            address:'软件园一号'
          },
          {
            id:'154552468',
            kind:'非农家庭户口',
            housing:'李帅',
            house:'101',
            card:'**************5134',
            address:'软件园一号'
          },
          {
            id:'154552468',
            kind:'非农家庭户口',
            housing:'张一一',
            house:'104',
            card:'**************5134',
            address:'软件园一号'
          },{
            id:'154552468',
            kind:'非农家庭户口',
            housing:'秦翰林',
            house:'103',
            card:'**************5134',
            address:'软件园一号'
          },
          {
            id:'154552468',
            kind:'非农家庭户口',
            housing:'马蜂',
            house:'105',
            card:'**************5134',
            address:'软件园一号'
          },
          {
            id:'154552468',
            kind:'非农家庭户口',
            housing:'蒋志雄',
            house:'106',
            card:'**************5134',
            address:'软件园一号'
          },
          {
            id:'154552468',
            kind:'非农家庭户口',
            housing:'刘云',
            house:'107',
            card:'**************5134',
            address:'软件园一号'
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
