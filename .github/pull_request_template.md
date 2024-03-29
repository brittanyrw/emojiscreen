# Card Pull Request Checklist

Follow the checklist below when working on adding a card. This will help you double-check that you have everything you need to have your Pull Request approved. Add an `x` inside of the `[ ]` to check off an item like this `[x]`. You may delete this checklist if you are adding a feature to the project. 

During Hacktoberfest to decrease the number of PRs to approve, we will only be merging one PR adding cards per person. If you would like to add multiple shows or movies, please include them in one PR. 

- [ ] 👍🏾 You have checked the [Issues](https://github.com/brittanyrw/emojiscreen/issues?q=is%3Aopen+is%3Aissue+label%3A%22add+emojis%22) and have gotten approval to add a movie or show to the project.
- [ ] 🔎 Have searched the `movies.js`, `musicals.js` or `tv.js` files in the `data` folder and `Pull Requests` to make sure that you are not adding a duplicate.
- [ ] 🖍️ Place the new show(s) or movie(s) in alphabetical order based on title. If the show or movie starts with 'the', then use the second word to alphabetize.
- [ ] 🌈 There is a single year under `year`. 
- [ ] 📅 There is a type from one of the following: `movie` , `tv` or `musical`.
- [ ] 🔗 There is a link to the IMDB page or Playbill archive page under `itemLink`. If the movie or TV show is not on IMDB, please choose a different movie or TV show.
- [ ] 3️⃣ There are at least three emojis listed under `emojiImgs`.
- [ ] 5️⃣ There is a maximum of five emojis listed under `emojiImgs`.
- [ ] 👍🏽 The pull request has a descriptive title (such as `Added The Lion King` or `Added Black Panther, The Avengers: Endgame and Thor`).
- [ ] ⭐ The genres are all inside of square brackets `[ ]` and each are individually wrapped in quotation marks and have a comma between each one. (such as submitting this `"genres": ["adventure","mystery","animation"]` and not this `"genres":["adventure, mystery, animation"]`).
