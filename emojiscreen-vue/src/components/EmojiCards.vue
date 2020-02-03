<template>
  <div id="emoji-cards">
    <div v-for="(emoji, index) in emojis" v-bind:key="index">
        <h3>{{emoji.title}}</h3>
    </div>
  </div>
</template>

<script>

import {emojiCards} from "../data/emojis";

export default {
  name: 'EmojiCards',
  data: function () {
		return {
			emojis: emojiCards
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
