<template>
  <div id="app">
    <img src="./assets/DI_Logo_Full_Color_RGB.svg" width="300px"><br />
    <!-- Replace HelloWorld component with router-view -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

p.heading {
  font-size: 40px;
}

p.internal-router {
  font-size: 20px;
}
</style>
