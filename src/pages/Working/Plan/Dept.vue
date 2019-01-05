<template>
  <el-container>
    <el-main>
      <WorkingMain></WorkingMain>
    </el-main>
  </el-container>
</template>

<script>
  import WorkingMain from '../../../components/working/WorkingDeptMain'

  export default {
    props: {
      rightTitle: String
    },
    components: {
      WorkingMain
    },
    data() {
      return {
      }
    },
    methods: {
    },

  }
</script>
<style scoped>

</style>
