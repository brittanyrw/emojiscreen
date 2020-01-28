<template>
    <footer>
        <p class="item-count">EmojiScreen currently has <span></span> movies, TV shows and musicals. 💖</p>
        <ul class="footer-list">
            <li>
                <p class="companion-project-link">Music fan? Check out <a href="https://emojibops.com" target="_blank">EmojiBops</a> 🎶</p> 
            </li>
            <li>
                <p class="companion-project-link">Book lover? Check out <a href="https://emojipages.com" target="_blank">EmojiPages</a> 📚</p>
            </li>
        </ul>
    </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>


<style scoped>

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

    footer img {
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
