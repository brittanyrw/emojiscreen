<template>
  <div id="emojis">
    <div v-for="(emoji, index) in emojis" v-bind:key="index" class="emoji-card" :data-filter="emoji.type">
      <div class='hint-container'>
        <i class='fas fa-question-circle'></i>
        <p class='hint'>
          <span class='type'>{{ emoji.type }}</span>
        </p>
      </div>
      <div class='emoji-images' v-emoji> {{ emoji.emojiImgs }} </div>
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
<style>

#emojis {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    grid-gap: 20px;
    max-width: 1220px;
    margin: auto;
    margin-bottom: 30px;
}

@media screen and (min-width: 662px){
  #emojis {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (min-width: 992px){
  #emojis {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media screen and (min-width: 1200px){
  #emojis {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

.emoji-card {
    display: inline-block;
    text-align: center;
    border-radius: 5px;
    position: relative;
    cursor: pointer;
}

.emoji-images img {
    width: 42px;
    margin-right: 5px;
}

@media screen and (max-width: 992px){
  .emoji-images img {
    width: 48px;
  }
}

.emoji-images img:last-child {
  margin-right: 0;
}

.emoji-images {
  border-radius: 5px 5px 0 0;
  box-shadow: 5px 5px 10px rgba(0,0,0,.1);
  position: relative;
  background-color: white;
  padding: 20px 15px;
  border-bottom: 2px solid #292932;
}

.emoji-card-title {
  border-radius: 0 0 5px 5px;
  box-shadow: 5px 5px 10px rgba(0,0,0,.1);
  transition:all .2s;
  transition: visibility 0s, height 0s, opacity 0.5s linear;
  margin-top: 10px;
  padding: 20px;
  margin: 0;
  background-color: lavender;
  cursor: auto;
}

.emoji-card:nth-child(2n) .emoji-card-title,
.emoji-card:nth-child(2n) .hint {
    background-color: #fae6e9;
}

.emoji-card:nth-child(3n) .emoji-card-title,
.emoji-card:nth-child(3n) .hint {
    background-color: #e6f6fa;
}

.emoji-card:nth-child(5n) .emoji-card-title,
.emoji-card:nth-child(5n) .hint {
    background-color: #effae6;
}

.emoji-card:nth-child(6n) .emoji-card-title,
.emoji-card:nth-child(6n) .hint {
    background-color: #faefe6;
}


.emoji-card-title > a {
  text-decoration: none;
  color: #292932;
}


.emoji-card-title > a:hover {
  color: #535379;
}

.emoji-card-title h3 {
  margin: 0;
}

.hide-card {
  opacity: 0;
  height: 0;
  visibility: hidden;
  transition: visibility 0s, opacity 0.5s linear;
  padding: 0;
}

.reveal-card {
  opacity: 1;
  visibility: visible;
  display: block;
}

.hint-container {
  position: absolute;
  right: -2px;
  top: 2px;
  height: 30px;
  width: 30px;
  overflow: visible;
  z-index: 9999;
}

i {
  font-size: 17px;
  background-color: white;
  border-radius: 50%;
  color: #292932;
}

.hint-symbol {
  background-color: #292932;
  height: 20px;
  width: 20px;
  border-radius: 50%;
}

.hint {
  opacity: 0;
  visibility: hidden;
  display: block;
  background-color: lavender;
  color: #292932;
  text-transform: capitalize;
  width: 100px;
  padding: 3px;
  border-radius: 5px;
  position: absolute;
  left: -82px;
  top: -30px;
  z-index: -1;
}

.hint-reveal {
  opacity: 1;
  visibility: visible;
}

</style>
