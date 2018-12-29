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
#app {
  text-align: center;
  background: #f0f0f0;
}
</style>
