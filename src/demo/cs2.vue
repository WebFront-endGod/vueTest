<template>
    <div class="cd2">
        <div>
          <input type="text">
          <input type="text">
          <input type="text">
        </div>
         <div>
             获取的参数是：{{this.$route.query.post}}
         </div>



    </div>
</template>
<script>
export default {
    name:"cd2"
}
</script>
<style scoped>

</style>