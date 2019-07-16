# EmojiScreen 📺

[EmojiScreen](https://emojiscreen.com) is a listing of movies, TV shows and musicals depicted through emojis. 

This project is used to teach Git and Github. Feel free to make a pull request to add one of your favorite shows or movies!

## Contributing

Below are instructions for how to contribute to this project. The easiest way to make a contribution is to add a `Emoji Card` to the website. Each card should be added in the `data.json` file as an object. For more advanced ways to contribute, see the repo Issues. 

Read below for a detailed walkthrough on how to add an `Emoji Card` to this project. First time pull-requests are encouraged.

### Card Overview

On the website, each `Emoji Card` displays images of the emojis, a hint icon that will show the type (musical, movie or TV show) when the user hovers and the name of the show, which appears when the user clicks on a card. 

[SCREEN SHOT HERE]

In the code, each `Emoji Card` consists of the following JSON:

``` 
{
    "title": "The Lion King",
    "emojiImgs": [
        "nature/lion.png",
        "animated/crown.gif",
        "nature/cat.png"
    ],
    "genres": [
        "animation",
        "adventure",
        "drama"
    ],
    "type": "movie",
    "year": 1994
  }
```

To add a new card to the website, add a new JSON object in the `data.json` file. Make sure to separate your new object from existing objects with a comma.

### Title

### Emoji Images


  "emojiImgs": [
      "nature/lion.png",
      "animated/crown.gif",
      "nature/globe-showing-europe-africa.png"
    ],
    "genres": [
      "animation",
      "adventure",
      "drama"
    ],

### Genres

For movies and TV shows, go to the IMDB profile and find the genres listed. Add these genres to the `Emoji Card` object. See the below screenshot for the genre listing in IMDB profiles.

![Screenshot of the Beauty and the Beast IDMB profile with the genres circled](readme/imdb-screenshot.png)

For musicals, include the `musical` genre and up to two other genres from the list below: 

Action
Adult
Adventure 
Animation
Biography
Comedy
Crime
Documentary
Drama
Family
Fantasy
Film Noir
Game-Show
History
Horror
Musical
Music
Mystery
News
Reality-TV
Romance
Sci-Fi
Short
Sport
Talk-Show
Thriller
War
Western

### Type

### Year

    "type": [
      "movie"
    ],
    "year": 1994