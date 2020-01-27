<template>
  <div id="app">
    <Header />
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
* {
  box-sizing: border-box;
}

body {
  background-color: #292932;
  padding: 40px;
  font-family: 'Open Sans', sans-serif;
  margin: 0;
}
</style>
