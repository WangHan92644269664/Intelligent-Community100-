<template>
  <div id="app">
    <Header v-show="$route.meta.showHeader"></Header>
    <router-view/>
  </div>
</template>

<script>
  import Header from '@/components/Header'
export default {
  name: 'App',
  components:{
    Header
  }
}
</script>

<style>

</style>
