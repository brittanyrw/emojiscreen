<template>
  <div id="app">
    <Header />
    <EmojiCards />
    <ViewAllButton />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import EmojiCards from './components/EmojiCards.vue'
import ViewAllButton from './components/ViewAllButton.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    EmojiCards,
    ViewAllButton,
    Footer
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
