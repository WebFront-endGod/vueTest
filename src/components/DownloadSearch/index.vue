<template>
  <section class="DS">

    <div class="Download">


    </div>


    <div class="Search">
      <div></div>
      <div></div>
      <div></div>
    </div>

  </section>
</template>

<script>
export default {
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
  .DS{
    position: fixed;
    left:0;
    top:0;
    width: 100%;
    z-index:1000;
    .Download{
      height: 3em;
      background-color: #232323;
    }

  }

</style>
