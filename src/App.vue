<template>
  <div>
    <v-tabBar v-if="aa"></v-tabBar>
    <router-view></router-view>
  </div>
</template>

<script>
import tabBar from "./components/tabBar/tabBar";
export default {
  name: "App",
  data() {
    return {
      aa: true
    };
  },
  components: {
    "v-tabBar": tabBar
  },
};
</script>

<style lang="less" scoped>
</style>
