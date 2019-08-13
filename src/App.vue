<template>
  <div id="app">
    <HelloWorld/>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style>
</style>
