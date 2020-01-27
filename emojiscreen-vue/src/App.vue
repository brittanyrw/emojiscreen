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
#app {
  
}
</style>
