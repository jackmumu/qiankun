<template>
  <div class="main">
    <div class="left">
      <div v-for="i in appList" :key="i" @click="push(i)">
        {{ i }}
      </div>
    </div>
    <div class="container" id="container"></div>
  </div>
</template>
<script setup lang="ts">
const push = (subapp: any) => {
  history.pushState(null, subapp, subapp);
};
const appList = ["vue2", "vue3", "react18"];
</script>
<style>
.main {
  display: flex;
}
.left {
  width: 200px;
  background-color: #f0f0f0;
}
.container {
  flex: 1;
  padding: 20px;
}
html,
body,
#app,
.main {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
