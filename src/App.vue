<template>
  <!-- <div id="app"> -->
  <div>
	  <router-view></router-view>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Test from './app/new_file.vue'


export default {
  name: 'app',
  components: {
    HelloWorld,
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
*{
	padding: 0;
	margin: 0;
}
</style>
