<template>
  <div id="emoji-cards">
    <div v-for="(emoji, index) in emojis" v-bind:key="index" class="emoji-card" :data-filter="emoji.type">
      <div class='hint-container'>
        <i class='fas fa-question-circle'></i>
        <p class='hint'>
          <span class='type'>{{ emoji.type }}</span>
        </p>
      </div>
      <div class='emoji-images'> {{ emoji.emojiImgs }} </div>
    <div class='emoji-card-title hide-card'>
      <a :href="emoji.itemLink">
        <h3>{{ emoji.title }}</h3>
      </a>
    </div>
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
