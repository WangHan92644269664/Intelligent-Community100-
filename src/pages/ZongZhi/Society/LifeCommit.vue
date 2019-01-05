<template>
  <el-container>
    <el-main>
      <ImportMain></ImportMain>
    </el-main>
  </el-container>
</template>

<script>
  import ImportMain from '../../../components/zongzhi/Society/LifeCommitMain'

  export default {
    props: {
      rightTitle: String
    },
    components: {
      ImportMain
    },
    data() {
      return {
      }
    },
    methods: {

    }
  }
</script>
<style>

</style>
<style scoped>
</style>
