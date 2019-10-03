# EmojiScreen 📺 

## A listing of movies, TV shows and musicals depicted through emojis.
[Visit emojiscreen.com](https://emojiscreen.com)

![Screenshot of Emojiscreen homepage](readme/emoji-screen.png)

> This project was built to create a fun, judgement free space for those learning Git and Github to practice making pull requests, branches, adding features, and more. 💛 💙 💜 💚 💖

## Contributing 🎁

Below are instructions for how to contribute to this project. Read through the contribution guidelines before opening a Pull Request on this project. 

## Hacktoberfest Note
Due to Hacktoberfest, this project is experiencing a lot of activity. 

### Contribution Guidelines

Below are some guidelines to follow when contributing to this project. 

### Issues

The current contributions that can be made to this project are the following. Click on the label links below to see what Issues are avaliable for each type of contributiion:

* Add a new feature (new feature label)
* Update an existing feature (enhancement label)
* Update current website styling, accessibility, or structure (updates label)
* Add a show or movie (add emojis label)

For other ways to contribute, see the repo Issues [under the label 'enhancement'](https://github.com/brittanyrw/emojiscreen/issues?q=is%3Aopen+is%3Aissue+label%3Aenhancement). You are also welcome to suggest other features [by adding an Issue](https://github.com/brittanyrw/emojiscreen/issues).

[Add a Card](/update-readme-hacktoberfest/card_overview.md).

## Walkthrough

Follow these instructions to add a card. You can add a card using the Github website user interface or on your local machine. If you do not already have one, create a Github account before proceeding.

> If you are already comfortable using Github and Git, feel free to skip the instructions below and make a pull request using whatever method you prefer!

## Github UI

### This method will use the Github website to contribute to this project. You will not need to download any programs to your computer using these instructions.

1. Check the [Issues](https://github.com/brittanyrw/emojiscreen/issues) and [Pull Requests](https://github.com/brittanyrw/emojiscreen/pulls) to see if the what you would like to add is listed. If it is not listed as an Issue or Pull Request, continue to the next step. If it is listed as an Issue or Pull Request, choose something else to add. 
2. Fork this repository. This will create a copy of the repository and create a new repository on your account. Note: the `Fork` button is located in the top right area of the repo.
3. Once the repo is forked, you will be taken to the forked repo. Note: In the top left, the name of the repo should now include your username.
4. Navigate to the `data.js` file in your forked repo by clicking on the file name.
5. Edit the `data.js` file by clicking on the pencil icon and add a new object for your movie, TV show or musical in alphabetical order.  **Note: If the movie title starts with 'The' then use the next word for alphabetical order.** Make sure there is a comma between your object and the object above and below. Refer to the card overview above for requirements for the different object keys.

Use the following object as a template:

```
{
  title: "Black Panther",
  emojiImgs: "😺🌍🏴💪🏿🦸🏿",
  genres: ["action", "adventure", "sci-fi"],
  itemLink: "https://www.imdb.com/title/tt1825683/",
  type: "movie",
  year: 2018
}
```

6. Once you have completed updating the object for your show or movie, scroll to the bottom of the page and add a commit message. The commit message should be formatted like: `Added Fight Club` or `Added Casablanca`. Click the `Commit Changes` button to save your changes.

![Screenshot of creating a commit message on the Github website](readme/commit-ui.png)

7. Navigate to the `Pull Request` tab. Click on New `Pull Request`.

![Screenshot of a Pull Request on the Github website](readme/pull-request.png)

8. Review your changes and then click `Create Pull Request`. Add any additional comments, go through the checklist within the Pull Request and add an Issue number if applicable, then click on `Create Pull Request`.
9. Wait for feedback/review of your Pull Request. Your code will be reviewed and if any changes need to be made, we will let you know. Once your pull request is accepted, you will be able to see your card at [https://emojiscreen.com](https://emojiscreen.com) and you will officially have contributed to the project! 🎉

## Local Development

### This method will use your local machine to contribute to the project. This will require you to download multiple programs onto your computer. This is the method most programmers use when working on projects. 

### Required Downloads & Tools

- Terminal (Mac OS) or Command Prompt. These are installed by default on your computer. Search for the program to open it. **For Windows, [Git Bash](https://gitforwindows.org/) is recommended.**
- [Git](https://git-scm.com/downloads) - This is a version control tool. For Windows, this download will include Git Bash.
- A text editor such as [Sublime Text](https://www.sublimetext.com/), [Atom](https://atom.io/), [Visual Studio Code](https://code.visualstudio.com/download), etc.

### Local Development Instructions

1. Check the [Issues](https://github.com/brittanyrw/emojiscreen/issues) and [Pull Requests](https://github.com/brittanyrw/emojiscreen/pulls) to see if the what you would like to add is listed. If it is not listed as an Issue or Pull Request, continue to the next step. If it is listed as an Issue or Pull Request, choose something else to add. 
2. Fork this repository. This will create a copy of the repository and create a new repository on your account.
3. Once the repo is forked, you will be taken to the forked repo. Note: In the top left, the name of the repo should now include your username.
4. Download the project to your computer. Click on the `Clone or Download` button. Copy the HTTPS github repo link.
5. In your terminal, navigate to where you would like to save the project (such as `cd Desktop`). Run the following command in the terminal, replacing the following link with your copied link: `git clone https://github.com/your-username-will-be-here/emojiscreen.git`;
6. After the command has been run, in the terminal, navigate into the EmojiScreen project folder: `cd emojiscreen`.
7. Open the `emojiscreen` project in your text editor of choice. Edit the `data.js` file and add a new object for your movie, TV show or musical in alphabetical order. **Note: If the movie title starts with 'The' then use the next word for alphabetical order.**. Make sure there is a comma between your object and the objects above and below. Refer to the card overview above for requirements for the different object keys.  Make sure to save your file after you have made changes. 

Use the following object as a template:

```
{
  title: "The Lion King",
  emojiImgs: "🦁👑🌍",
  genres: ["animation", "adventure", "drama"],
  itemLink: "https://www.imdb.com/title/tt0110357/",
  type: "movie",
  year: 1994
}
```

8. If you would like to see what your addition will look like, open the `index.html` file that is in the `emojiscreen` folder in a web browser. The EmojiCards are added in a random order so it may take you a few seconds to find what you added. If you do not see any cards in the browser, this could mean that you have a typo in your `data.js` file. If that is the case, double check what you have added for missing commas and quotation marks.
9. Once you are done, go to the terminal and type `git status`. You should see `data.js` as modified. If you don't see this, go back and make sure to save your `data.js` file.
10. Run `git add -A` to add your changes.
11. Add a commit message. Run the following command and replace with your movie or show name: `git commit -m "Added Harry Potter the movie"`.
12. If you have never used git on your computer before, you will see a message asking for you to set your email and username. If you do not see that message, continue to the next step. Run the following commands, replacing "you@example.com" with your Github email and "Your name" with your github username:

`git config --global user.email "you@example.com"`

`git config --global user.name "Your Name"`

Then re-run the commit command. Remember to replace with your show or movie: `git commit -m "Added Harry Potter the movie"`

13. Run `git push`. If you have not done this before, git push will not run until you login to your Github account. Type in your Github username and password. **NOTE: When you type your password, it will not show in the terminal. Press enter after you type your password to continue**.

14. Go to the Github website and navigate to the `Pull Request` tab. Click on New `Pull Request`.

![Screenshot of a Pull Request on the Github website](readme/pull-request.png)

15. Review your changes and then click `Create Pull Request`. Add any additional comments, go through the checklist within the Pull Request and add an Issue number if applicable, then click on `Create Pull Request`.
16. Wait for feedback/review of your Pull Request. Your code will be reviewed and if any changes need to be made, we will let you know. Once your pull request is accepted, you will be able to see your card at [https://emojiscreen.com](https://emojiscreen.com) and you will officially have contributed to the project! 🎉

## Other Resources and Options
* [Git Handbook](https://guides.github.com/introduction/git-handbook/)
* [Additional Git/Github Practice](https://try.github.io/)
* [Visualizing Git Commands Tool](https://git-school.github.io/visualizing-git/)
* Try creating a [new branch](https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches) for your pull request.
* [Syncing your Fork](https://help.github.com/en/articles/syncing-a-fork)

## Credits

💖Check out a list of all [of the EmojiScreen contributors](https://github.com/brittanyrw/emojiscreen/graphs/contributors).

Emoji graphics are by Twitter and are licensed under CC-BY 4.0. Review the [Attribution Requirements](https://github.com/twitter/twemoji#attribution-requirements) for more information.

> Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.
