<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Header msg="Welcome to Your Vue.js App"/>
    <EmojiCards />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import EmojiCards from './components/EmojiCards.vue'

export default {
  name: 'app',
  components: {
    Header,
    EmojiCards
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
