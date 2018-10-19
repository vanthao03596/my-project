<template>
  <div id="app">
     <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* #nprogress .bar {
  background: #159957 !important;
} */
#nprogress .bar {
  height: 4px !important;
  background: #27c4f5 linear-gradient(to right,#27c4f5,#a307ba,#fd8d32,#70c050,#27c4f5) !important;
  background-size: 500% !important;
  animation: 2s linear infinite barprogress, .3s fadein !important;
  width: 100% !important;
}
@keyframes barprogress{
  0% {
    background-position:0% 0
  }
  to{
    background-position:125% 0
  }
}
#nprogress .spinner-icon {
  border-top-color: transparent !important;
  border-left-color: transparent !important;
}
</style>
