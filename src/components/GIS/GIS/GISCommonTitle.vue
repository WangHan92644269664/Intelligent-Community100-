<template>
    <div>
        <h5>{{title}}</h5>
    </div>
</template>
<script>
export default {
    props:{
        title:String
    }
}
</script>
<style scoped>
div{
    width:100%;
    height: 40px;
}
 h5{
     text-align: center;
     width:100%;
     padding:10px 0;
     color:#0177ff;
     font-size: 18px;
     font-weight: 600;
 }
</style>
