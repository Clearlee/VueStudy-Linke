<template>
  <div class="main">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <nav-bottom></nav-bottom>
  </div>
</template>

<script>
import NavBottom from "./common/navbottom/NavBottom";
export default {
  name: "Main",
  components: {
    NavBottom
  }
};
</script>

<style lang="stylus" scoped>
.main
  height 100%
</style>