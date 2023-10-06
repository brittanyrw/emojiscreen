# EmojiScreen 📺 

## A listing of movies, TV shows and musicals depicted through emojis.
[Visit emojiscreen.com](https://emojiscreen.com)

![Screenshot of Emojiscreen homepage](readme/emoji-screen.png)

## Contributing Guidelines 🎁

Below are some guidelines to follow when contributing to this project. 

### Adding a Movie, TV show or Musical

To add a show or movie to this project, you will need to first check the project in the `movies.js`, `tv.js`, or `musicals.js` files to make sure that the movie or show you would like to add is not already in the project. Once you confirm the item you want to add is not already in the project, open an Issue stating what you would like to add. Once you get approval for the Issue, move on to adding your item to the code. 

You will add an `Emoji Card` inside of the `movies.js`, `tv.js`, or `musicals.js` files in the `data` folder. Each file is made up of an array (a list) of objects. You will add a new object for your show or movie into the appropriate file. Please note: The `musicals.js` file is for live musicals (such as Broadway and West End shows). Movie musicals should be added to the `movies.js` file.

Below is an example of what a show looks like on the website:

![Screenshot of Beauty and the Beast Emoji Card](/readme/emoji-card.png)

In the emoji JavaScript files, each `Emoji Card` consists of the following object:

```
{
  title: "Beauty and the Beast",
  emojiImgs: "🏰🥀🎶📚🕰️",
  genres: ["animation", "family", "fantasy"],
  itemLink: "https://www.imdb.com/title/tt0101414/",
  type: "movie",
  year: 1991
}
```

## Required reading:
View the [Card Overview](/docs/card_overview.md) for details on each part of the emoji object.

#### Walkthroughs
Below are detailed walkthroughs on how to add a show or movie to EmojiScreen.

* [Add a show or movie via GitHub website](docs/github_ui_walkthrough.md) (no downloads required)
* [Add a show or movie using your local development environment](docs/local_dev_walkthrough.md) (downloads required, most commonly used way to contribute)

### Adding or Updating Features Contributions

* [Find an Issue](https://github.com/brittanyrw/emojiscreen/issues) that you would like to complete or [create an Issue](https://github.com/brittanyrw/emojiscreen/issues) if you have an idea for a new feature.
* If someone is already assigned an Issue, please move on to another Issue. If the Issue has not been assigned, comment inside of the Issue stating that you would like to work on that item. If you are not assigned to an Issue, your PR will not be accepted for that Issue.
* After you receive confirmation, complete the Issue and submit a Pull Request.

***🚨 Wait for confirmation from the maintainers before working on the Issue***.
If you submit a PR without being assigned an Issue for a feature, your PR will be closed and you will not be assigned the Issue.

If you would like to suggest a new feature, create [an Issue](https://github.com/brittanyrw/emojiscreen/issues) and outline what it is you think should be added or updated. This project was created to help beginners, so keep that in mind when suggesting new things. Wait for confirmation before working on the Issue. 

### ⭐️ Important Notes
* The [Card Overview](/docs/card_overview.md) includes all of the instructions for adding a show or movie.
* Search the `movies.js`, `tv.js`, or `musicals.js` files and current open pull requests to make sure you are not adding a duplicate.
* Make sure your emojis actually depict the show or movie. Someone should be able to guess what the show or movie is based on the emojis you choose.
* If you are adding multiple items, please include them in one pull request.
* [Go through this checklist](docs/card_overview.md#card-pull-request-checklist) to make sure you have added everything needed for a show or movie. 

## Git and GitHub Resources
* [Git Handbook](https://guides.github.com/introduction/git-handbook/)
* [Additional Git/Github Practice](https://try.github.io/)
* [Visualizing Git Commands Tool](https://git-school.github.io/visualizing-git/)
* Try creating a [new branch](https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches) for your pull request.
* [Syncing your Fork](https://help.github.com/en/articles/syncing-a-fork)

## Credits

💖Check out a list of all [of the EmojiScreen contributors](https://github.com/brittanyrw/emojiscreen/graphs/contributors).

Emoji graphics are by Twitter and are licensed under CC-BY 4.0. Review the [Attribution Requirements](https://github.com/twitter/twemoji#attribution-requirements) for more information.

> Please note that this project is released with a [Contributor Code of Conduct](/CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.
