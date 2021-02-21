<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <Todo />
  <hr>
  <h6 class="line text-decoration-undeline " >
    Copyright © 2021 -
    <a href="https://t.co/hnIdiJyf6m?amp=1" target="_blank"
      >[ Books by John Kocer @amazon.com]
    </a>
    <br />
    <a href="https://johnkocer.github.io/" target="_blank"
      >https://johnkocer.github.io/</a
    >
  </h6>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Todo from './components/Todo.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld
    Todo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 20px;
  margin-left: 40px;
}
</style>
