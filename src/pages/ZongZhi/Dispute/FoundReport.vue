<template>
  <el-container>
    <el-main>
      <FoundReportMain></FoundReportMain>
    </el-main>
  </el-container>

</template>

<script>
  import FoundReportMain from '../../../components/zongzhi/Dispute/DisputeFoundReport.vue'

  export default {
    props: {
      rightTitle: String
    },
    components: {
      FoundReportMain
    },
    data() {
      return {
        title:'发现上报'
      }
    },
    methods: {}
  }
</script>
<style>

</style>
<style scoped>

</style>
