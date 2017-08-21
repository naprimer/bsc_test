<template>
  <div class="loading" v-show="loading">
    <img src="../assets/loading.gif" alt="" class="loading__img">
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: ['loading']
}
</script>

<style lang="scss" scoped>
.loading{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  background: rgba(255,255,255,0.9);

  &__img{
    position: absolute;
    width: 100px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
