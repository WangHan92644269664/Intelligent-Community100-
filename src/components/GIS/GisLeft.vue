<template>
  <div>
    <div class="gis-left">
      <div class="div1">
        <h5>社区组织</h5>
        <div class="organization">
          <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </div>
        <div class="tag-con">
          <div class="tag tag1">
            <el-tag>区县级网格</el-tag>
            <el-tag type="success">街道、乡镇级网格</el-tag>
          </div>
          <div class="tag">
            <el-tag>社区、村委、居委级网络</el-tag>
            <el-tag type="success">基层网络</el-tag>
          </div>
          <hr>
          <div class="tag">
            <el-tag>建筑物</el-tag>
            <el-tag type="success">部件</el-tag>
            <el-tag type="info">事件</el-tag>
          </div>
        </div>
      </div>
      <div class="div2">
        <h5>社区组织数据</h5>
        <div class="organization-data">
          <el-row class="data-con">
            <el-col :span="12">总数（个）
              <br>
              <span>1008</span>
            </el-col>
            <el-col :span="12">建筑物（栋）
              <br>
              <span>20</span>
            </el-col>
          </el-row>
          <el-row class="data-con">
            <el-col :span="12">部件（件）
              <br>
              <span>10</span>
            </el-col>
            <el-col :span="12">民情（件）
              <br>
              <span>10</span>
            </el-col>
          </el-row>
          <el-row class="data-con">
            <el-col :span="12">事件（件）
              <br>
              <span>14</span>
            </el-col>
            <el-col :span="12">组织（个）
              <br>
              <span>12</span>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="div3">
        <div class="info-table">
          <el-table :data="tableData3" height="200"  style="width: 100%">
            <el-table-column prop="info" label="消息中心"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GisLeft",
  data() {
    return {
      tableData3: [
        {
         info: "新添加了一个吸毒人员，请查看",
        },
        {
          info: "新添加了一个社区矫正人员，请查看！",
        },
        {
         info: "新添加了一个刑满释放人员，请查看"
        },
        {
         info: "您有一条新备忘录：公示上报",
        },
        {
        info: "2016-05-03",
        },
        {
         info: "2016-05-03",
        },
        {
          info: "2016-05-03",
        }
      ],
      data: [
        {
          label: "高新区",
          children: [
            {
              label: "天桥办事处",
              children: [
                {
                  label: "天桥二级办事处"
                }
              ]
            }
          ]
        },
        {
          label: "郑东新区",
          children: [
            {
              label: "软件园办事处",
              children: [
                {
                  label: "软件园西区办事处"
                }
              ]
            },
            {
              label: "科技园办事处",
              children: [
                {
                  label: "科技园西区办事处"
                }
              ]
            }
          ]
        },
        {
          label: "经开区",
          children: [
            {
              label: "德化园办事处",
              children: [
                {
                  label: "德化园西区办事处"
                }
              ]
            },
            {
              label: "明理路",
              children: [
                {
                  label: "明理路附属办事处"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    }
  }
};
</script>

<style scoped>
.gis-left {
  height: 100%;
}
.div1,
.div2,
.div3 {
  width: 100%;
  background: #fff;
  border-radius: 5px;
  margin-bottom: 2%;
  margin-left: 2%;
  padding-left: 8%;
  padding-top: 2%;
}
h5 {
  text-align: left;
}
.div1 {
  height: 38%;
  margin-top: 1%;
}
.div2 {
  height: 34%;
}
.div3 {
  height: 25%;
}
.organization {
  height: 30%;
  overflow-y: auto;
}
.tag {
  text-align: left;
}
.tag1 {
  margin-bottom: 3%;
}
.data-con {
  margin-top: 2%;
  color: #999;
}
.data-con span {
  color: #ff6d0c;
  font-size: 30px;
}
.info-table{
    height: 60%;
}
</style>
