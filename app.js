$(document).ready(function() {
  // Create a variable for the container to hold the emoji cards.
  const emojiCardContainer = document.getElementById("emojis");

  // Create a variable for the emoji cards.
  let emojiCard = "";

  // Combine the array of objects from the movies.js, musicals.js and tv.js files into one array of objects.

  const emojiItems = emojiMovies.concat(emojiTv, emojiMusicals);

  // Run the random order function below on the data inside data folder in the musicals.js, tv.js and movies.js files. This will display the cards in a random order on the page every time the page is refreshed.
  shuffle(emojiItems);

  // Create a function to build a link for each emoji card. This function will take in the title and year of a show/movie as well as the IMDB url and return an anchor tag that will link to the IMDB page with the link text being the title of the show/movie.

  function generateTitle(title, year, itemLink) {
    const titleElement = "<h3>" + title + " (" + year + ")</h3>";
    if (itemLink) {
      return (
        "<a title='Go to website' href='" +
        itemLink +
        "' target='_blank'>" +
        titleElement +
        "</a>"
      );
    }
    return titleElement;
  }

  // Loop through the data from the data folder and insert parts of the data into HTML. On each loop, we are appending a new card with the HTML below.
  for (let i in emojiItems) {
    // create variables for each key from the Emoji Card that we want to display.
    const type = emojiItems[i].type;
    const emojiImgs = emojiItems[i].emojiImgs;
    const year = emojiItems[i].year;
    const title = emojiItems[i].title;
    const itemLink = emojiItems[i].itemLink;

    // Add each variable from above to a template literal string (indicated by the backtick (`)) to build the HTML for the Emoji Card. This is also where we are calling the generateTitle function created above to build the anchor tag.
    emojiCard +=
      "<div class='emoji-card' data-filter='" +
      type +
      "'><div class='hint-container'><i class='fas fa-question-circle'></i><p class='hint'><span class='type'>" +
      type +
      "</span></p></div><div class='emoji-images'>" +
      emojiImgs +
      "</div><div class='emoji-card-title hide-card'>" +
      generateTitle(title, year, itemLink) +
      "</div></div>";
  }

  // Append the emoji card variable, which has all of the emoji cards to the initial variable we created that was for the container to hold the cards.
  emojiCardContainer.innerHTML = emojiCard;

  // Run Twemoji to change all emojis to Twitter emojis.
  twemoji.parse(document.body);

  // Add the count of number of shows/movies to the footer.
  document.getElementsByClassName("counter")[0].innerHTML = emojiItems.length;

  // Display movies and show in a random order, the random order will refresh on page reload. This function is used above before the cards are rendered on the page.
  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  // The code that runs the filter buttons at the top of the page. This currently allows users to filter by 'type' (ie musical, movie or tv show).
  // Get all filter buttons
const filterButtons = document.querySelectorAll("#filters button");

// Get the message and emoji-card-title elements
const message = document.getElementById("message");
const emojiCardTitles = document.querySelectorAll("div.emoji-card-title");

// Add a click event listener to each filter button
filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Get the data-filter attribute of the clicked button
    const filterTag = button.getAttribute("data-filter");

    // Hide the message element
    message.style.display = "none";

    // Add a "hide-card" class to all emoji-card-title elements
    emojiCardTitles.forEach(function (emojiCardTitle) {
      emojiCardTitle.classList.add("hide-card");
    });

    // If the filter is "view-all," show all cards
    if (filterTag === "view-all") {
      const emojiCards = document.querySelectorAll("div.emoji-card");
      emojiCards.forEach(function (card) {
        card.style.display = "block";
      });
    } 
    else {
      // If the user clicks on movies, musicals or tv shows, show the cards that fall into that category and hide all cards that do not fall into that category.
      const filteredCards = document.querySelectorAll(`div.emoji-card[data-filter='${filterTag}']`);

      if (filteredCards.length > 0) {
        // Show cards that match the filter and hide others
        const allCards = document.querySelectorAll("div.emoji-card");

        allCards.forEach(function (card) {
          if (card.getAttribute("data-filter") === filterTag) {
            card.style.display = "block";
          }
          else {
            card.style.display = "none";
          }
          
        });
      } 
      else {
        // If there are no matching cards, display a message
        const allCards = document.querySelectorAll("div.emoji-card");
        allCards.forEach(function (card) {
          card.style.display = "none";
        });
        message.style.display = "block";
        message.innerHTML = `<p>There are no ${filterTag} cards on this page. 🙁</p>`;
      }
    }
  });
});


  // Reveal the movie or show title when the user clicks on the emojis.
  
  const emojiImages = document.getElementsByClassName("emoji-images");

  function toggleCard(event) {
    event.currentTarget.nextElementSibling.classList.toggle("hide-card");
  }

  Array.from(emojiImages).forEach(function (element) {
    element.addEventListener("click", toggleCard);
  });

// Get all elements with class 'hint-container' inside the element with id 'emojis'
let hintContainers = document.querySelectorAll("#emojis .hint-container");

// Loop through each hint container
hintContainers.forEach(function(hintContainer) {
  // Add event listener for mouseover event
  hintContainer.addEventListener("mouseover", function() {
    // Find the element with class 'hint' inside the current hint container and add class 'hint-reveal'
    this.querySelector(".hint").classList.add("hint-reveal");
  });

  // Add event listener for mouseleave event
  hintContainer.addEventListener("mouseleave", function() {
    // Find the element with class 'hint' inside the current hint container and remove class 'hint-reveal'
    this.querySelector(".hint").classList.remove("hint-reveal");
  });
});


  // Toggle to expand or hide all of the movie/show names by clicking an icon
  $(".btn-reveal-all").click(function () {
    $(this).toggleClass(["revealed"]);
    const emojis = $("#emojis").find(".emoji-card-title");
    if ($(this).hasClass("revealed")) {
      emojis.removeClass("hide-card");
    } else {
      emojis.addClass("hide-card");
    }
    let title = $(this).attr("title");
    title =
      title.search(/reveal/i) === -1
        ? title.replace(/hide/i, "Reveal")
        : title.replace(/reveal/i, "Hide");
    $(this).attr("title", title);

    $(this).find("i").toggleClass(["fa-eye", "fa-eye-slash"]);
  });

  //Add a secret code to the project that will trigger a fun animation. If a user types in the word 'emojis' while on the website, emojis will start falling briefly. 

  //Create an array to store the keys that the user types.
  const keysPressed = [];
  // Store the secret code that the user needs to type to start the animation.
  const code = "emojis";
  // Select the secret code element by id which by default is hidden on the page.
  const secretCode = document.getElementById("secret-code");
  //Create the function that will run when the user types the correct code.
  function showEmojis() {
    //Create a list of emojis to show in the animation.
    const favEmojis = ["💖","⭐️","😂","💫","🥳","🙃","🥰","🦄","🌼","🎁","💜","✨"];
    let animatedEmoji = "";
    //Build the HTML to display each emoji.
    favEmojis.forEach(function (emoji) {
      animatedEmoji += '<div class="emoji-img">' + emoji + "</div>";
    });
    //Add the HTML for each emoji to the page.
    secretCode.innerHTML = animatedEmoji;
    //Change each emoji to Twitter emojis.
    twemoji.parse(secretCode);
    //Display the entire secret code container. The animation is coming from CSS.
    secretCode.classList.add("show");
  }
  //Add an event listener to watch for what keys the user presses.
  window.addEventListener("keyup", (e) => {
    //Add each letter the user presses to the keysPressed array.
    keysPressed.push(e.key);
    //Check if the secret code is included in the array and if so run the show Emojis function.
    if (keysPressed.join("").includes(code)) {
      showEmojis();
    }
  });
});
