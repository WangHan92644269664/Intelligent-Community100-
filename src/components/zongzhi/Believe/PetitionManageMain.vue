<template>
  <div>
    <el-row class="mainRight">
      <el-col :span="24" class="borderBottom">
       信访管理列表
      </el-col>
    </el-row>
    <el-row style="padding-left: 30px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="信访网格:">
            <el-input v-model="formInline.name" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="信访形式:">
            <el-select v-model="formInline.kind" placeholder="请选择">
              <el-option label="书信" value="书信"></el-option>
              <el-option label="传真" value="传真"></el-option>
              <el-option label="电话" value="电话"></el-option>
              <el-option label="微信" value="微信"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="信访目的:">
            <el-select v-model="formInline.de" placeholder="请选择">
              <el-option label="求决" value="求决"></el-option>
              <el-option label="控检" value="控检"></el-option>
              <el-option label="申诉" value="申诉"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="信访日期:">
            <el-input v-model="formInline.date" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="关键字:">
            <el-input v-model="formInline.key" placeholder="信访件号/查询码"></el-input>
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
        prop="id"
        label="信访号"
        min-width="11%">
      </el-table-column>
      <el-table-column
        prop="name"
        label="所属网格"
        show-overflow-tooltip
        min-width="14%">
      </el-table-column>
      <el-table-column
        prop="card"
        label="查询码"
        min-width="12%">
      </el-table-column>
      <el-table-column
        prop="date"
        label="信访日期"
        min-width="12%">
      </el-table-column>
      <el-table-column
        prop="object"
        label="信访对象"
        min-width="11%">
      </el-table-column>
      <el-table-column
        prop="kind"
        label="信访形式"
        min-width="11%">
      </el-table-column>
      <el-table-column
        prop="de"
        label="信访目的"
        min-width="11%">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        sortable
        min-width="30%">
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
          de:'',
          date:'',
          key:''
        },
        currentPage4: 1,
        tableData: [
          {
          id: 'A0005',
          name: '九庄镇政法委',
         card:'ADS1234',
          date:'2018-05-16',
         object:'方丽萍',
         kind:'书信',
        de:'求决',
        }, {
          id: 'A0005',
          name: '开阳县政法委',
          card:'ADS1234',
          date:'2018-05-16',
          object:'方丽萍',
          kind:'书信',
          de:'求决',
        }, {
          id: 'A0005',
          name: '久安乡政法委',
          card:'ADS1234',
          date:'2018-05-16',
          object:'方丽萍',
          kind:'书信',
          de:'求决',
        }, {
          id: 'A0005',
          name: '大石乡政法委',
          card:'ADS1234',
          date:'2018-05-16',
          object:'方丽萍',
          kind:'书信',
          de:'求决',
        },
          {
            id: 'A0005',
            name: '九庄镇政法委',
            card:'ADS1234',
            date:'2018-05-16',
            object:'方丽萍',
            kind:'书信',
            de:'求决',
          }
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
