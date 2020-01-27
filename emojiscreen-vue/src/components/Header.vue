<template>
    <header>
        <h1>Emoji Screen</h1>
        <div class="heading-content">
            <div class="header">
                <h2>A listing of movies, TV shows and musicals as emojis. 💖</h2>
                <p>Click on the emojis to reveal the show or movie name!</p>
                <div class="imdb-link">
                    <i class="fas fa-film"></i>
                    <a href="https://www.imdb.com/list/ls095903435/" target="_blank" class="imdb-link-item">
                        View IMDB List
                    </a>
                </div>
            </div>
            <div class="contribute-callout">
                <p>Want to add to EmojiScreen? Head to Github! ✨</p>
                <a href="https://github.com/brittanyrw/emojiscreen" target="_blank">Contribute</a>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>


<style scoped>

header {
  max-width: 1200px;
  margin: 0 auto;
}


h1 {
  font-family: 'Londrina Solid', cursive;
  font-size: 72px;
  margin: 0;
  color: white;
}

@media screen and (max-width: 667px){
  h1 {
    font-size: 50px;
  }
}

header img {
  height: 29px;
}

.heading-content {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
}

@media screen and (min-width: 662px){
  .heading-content {
    grid-template-columns: 2.5fr 1fr;
  }
}

.header {
  background-color: lavender;
  margin: 20px 0 0 0;
  border: 1px solid lavender;
  padding: 10px 20px;
}

.contribute-callout {
  padding: 0 20px 20px 20px;
  margin: 20px 0 0 0;
  border: 3px solid #fae6e9;
}

.contribute-callout p {
  color: white;
  text-align: center;
}

.contribute-callout a {
  color: #292932;
  background-color: #effae6;
  padding: 15px;
  font-weight: 900;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  display: block;
  transition: .5s;
}

.contribute-callout a:hover {
  background-color: gold;
  transition: .5s;
}

.contribute-callout img {
  height: 27px;
}

.imdb-link {
  margin-top: 8px;
  border: 3px solid #352649;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 200px;
}

.imdb-link-item {
  color: #352649;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
}

.imdb-link i {
  background: none;
  margin-right: 8px;
  font-size: 24px;
  color: #3c3a4a;
}

</style>
