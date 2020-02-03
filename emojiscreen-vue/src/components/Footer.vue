<template>
    <footer>
        <p class="item-count" v-emoji>EmojiScreen currently has <span>{{ emojis.length }}</span> movies, TV shows and musicals. 💖</p>
        <ul class="footer-list">
            <li>
                <p class="companion-project-link" v-emoji>Music fan? Check out <a href="https://emojibops.com" target="_blank">EmojiBops</a> 🎶</p> 
            </li>
            <li>
                <p class="companion-project-link" v-emoji>Book lover? Check out <a href="https://emojipages.com" target="_blank">EmojiPages</a> 📚</p>
            </li>
        </ul>
    </footer>
</template>

<script>

import {emojiCards} from "../data/emojis";

export default {
  name: 'Footer',
  data: function () {
		return {
			emojis: emojiCards
		}
	}
}
</script>


<style>

    footer {
    text-align: center;
    max-width: 1000px;
    margin: auto;
    border-top: 1px solid white;
    padding-top: 20px;
    }

    footer p {
    line-height: 26px;
    color: white;
    font-size: 18px;
    }

    footer span {
    font-weight: bold;
    letter-spacing: 0.5px;
    color: gold;
    }

    footer img.emoji {
    height: 19px;
    }

    footer a {
    color: #fff;
    text-decoration: underline;
    }

    .footer-list {
    padding: 0px;
    }

    .footer-list li{
    display: block;
    margin: 8px
    }

    .footer-list p {
        margin: 0px;
    }

</style>
