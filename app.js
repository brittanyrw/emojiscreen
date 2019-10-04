$(document).ready(function() {
  // Create a variable for the container to hold the emoji cards.
  var emojiCardContainer = $("#emojis");

  // Create a variable for the emoji cards.
  var emojiCard = "";

  // Select container for genre options
  const genreSelect = document.getElementById('genre-select');

  // Variable for genres.
  var moviesByGenre = {};

  // Run the random order function below on the data inside data.js. This will display the cards in a random order on the page every time the page is refreshed.
  shuffle(emojiItems);

  renderAllCards(true);

  // Add the count of number of shows/movies to the footer.
  $("footer span").append(emojiItems.length);

  /**
   * Iterate through card data,
   * Cache movies by genre,
   * Append card HTML to body,
   * Convert emojis to Twitter emojis.
   * 
   * Pass optional boolean value to re-parse the genres.
   * Defaults to false.
   * 
   * @param |boolean| willParseGenres 
   */
  function renderAllCards(willParseGenres = false) {
    emojiCard = '';
    for (var i in emojiItems) {
      emojiCard +=
        "<div class='emoji-card' year-filter='" + chopYear(emojiItems[i].year) + "s' data-filter='" + emojiItems[i].type +
      "'><div class='hint-container'><i class='fas fa-question-circle'></i><p class='hint'><span class='type'>" + emojiItems[i].type +
      "</span></p></div><div class='emoji-images'>" + emojiItems[i].emojiImgs +
      "</div><div class='emoji-card-title hide-card'><h3>" + emojiItems[i].title +
      " (" + emojiItems[i].year + ")" + "</h3></div></div>";

      willParseGenres && parseGenres(emojiItems[i]);
    }

    emojiCardContainer.html(emojiCard);
    twemoji.parse(document.body);
  }    

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

  /**
   * Function assumes data set contains no duplicates
   * 
   * @param {Object} emojiItem 
   */
  function parseGenres(emojiItem) {
    let newOption;
    emojiItem.genres.forEach(genre => {
      if (moviesByGenre.hasOwnProperty(genre)) {
        moviesByGenre[genre].push(emojiItem);
      } else {
        moviesByGenre[genre] = [emojiItem];
        newOption = document.createElement('option');
        newOption.value = genre;
        newOption.label = genre.toUpperCase();
        genreSelect.appendChild(newOption);
      };
    });
  }

  // Truncates a full year to the decade value
  function chopYear(year) {
    year = year.toString();
    return year.slice(0, -1) + '0';
  }

  // The code that runs the filter buttons at the top of the page. This currently allows users to filter by 'type' (ie musical, movie or tv show).
  $("#filters button").each(function() { 
    $(this).on("click", function() {
      var filtertag = $(this).attr("data-filter");
      $("#message").hide();
      $("div.emoji-card-title").addClass("hide-card");
      if (filtertag == "view-all") { // If the user clicks on view all, re-render all cards.
        renderAllCards();
      } else if ( // If the user clicks on movies, musicals or tv shows, show the cards that fall into that category and hide all cards that do not fall into that category.
        $("div.emoji-card[data-filter='" + filtertag + "']").length > 0
      ) {
        $("div.emoji-card").show();
        $(
          "div.emoji-card:not([data-filter='" + filtertag + "'])"
        ).hide();
      } else { // If there are no cards that match the filter, display a message that says that there are no cards for that category.
        $("div.emoji-card").hide();
        $("#message").show();
        $("#message").html(
          "<p>There are no " + filtertag + " cards on this page. 🙁</p>"
        );
      }
    });
  });

  // Rough pass at year filter. It's a mess of jQuery / vanilla right now. 
  /**
   * TODO:
   * => css classes to replace jQuery hide / show
   */
  document.getElementById('advanced-filters')
    .addEventListener('click', function(event) {
      const showFiltersBtn = document.querySelector('button.show-advanced-filters');
      const target = event.target;
      const className = target.className;
      if (target === showFiltersBtn || className === 'fas fa-angle-down') {
        document.getElementById('year-filter').classList.toggle('shown');
        document.getElementById('genre-filter').classList.toggle('shown');
        showFiltersBtn.children[0].classList.toggle('rotate');
      } else if (target !== showFiltersBtn && className.match(/filter-\d+s/g)) {        
        document.getElementById('year-filter').classList.toggle('shown');
        document.getElementById('genre-filter').classList.toggle('shown');
        showFiltersBtn.children[0].classList.toggle('rotate');

        // year filter code
        var decade = event.target.attributes['data-filter'].value;
        $("#message").hide();
        document.querySelectorAll('div.emoji-card-title').forEach(card => {
          card.classList.add('hide-card');
        });
        if (document.querySelectorAll(`div.emoji-card[year-filter='${decade}']`).length > 0){
          $("div.emoji-card").show();
          $(
            `div.emoji-card:not([year-filter='${decade}'])`
          ).hide();
        } else {
          $("div.emoji-card").hide();
          $("#message").show();
          $("#message").html(
            `<p>There are no cards from the ${decade} on this page. 🙁</p>`
          );
        }
      }
  });

  // Genre filter re-renders all the cards;
  genreSelect.addEventListener('change', function(event) {
    const movies = moviesByGenre[event.target.value];
    const showFiltersBtn = document.querySelector('button.show-advanced-filters');
    document.getElementById('year-filter').classList.toggle('shown');
    document.getElementById('genre-filter').classList.toggle('shown');
    showFiltersBtn.children[0].classList.toggle('rotate');
    emojiCard = '';
    movies.forEach(movie => {
      emojiCard +=
        "<div class='emoji-card' year-filter='" + chopYear(movie.year) + "s' data-filter='" + movie.type +
      "'><div class='hint-container'><i class='fas fa-question-circle'></i><p class='hint'><span class='type'>" + movie.type +
      "</span></p></div><div class='emoji-images'>" + movie.emojiImgs +
      "</div><div class='emoji-card-title hide-card'><h3>" + movie.title +
      " (" + movie.year + ")" + "</h3></div></div>";
    });
    
    emojiCardContainer.html(emojiCard);
    twemoji.parse(document.body);
  })

  // Reveal the movie or show title when the user clicks on the emojis.
  $("#emojis").on("click", ".emoji-images", function() {
    $(this)
      .siblings(".emoji-card-title")
      .toggleClass("hide-card");
  });

  // Display a hint (type ie tv, movie or musical) when hovering over the question mark.
  $("#emojis").on("mouseover", ".hint-container", function() {
    $(this)
      .find(".hint")
      .addClass("hint-reveal");
  });

  // Hide hint (type ie tv, movie or musical) when the user stops hovering over the question mark.
  $("#emojis").on("mouseleave", ".hint-container", function() {
    $(this)
      .find(".hint")
      .removeClass("hint-reveal");
  });

  // Toggle to expand or hide all of the movie/show names by clicking an icon
  $(".btn-reveal-all").click(function() {
    var title = $(this).attr("title");
    title =
      title.search(/reveal/i) === -1
        ? title.replace(/hide/i, "Reveal")
        : title.replace(/reveal/i, "Hide");
    $(this).attr("title", title);

    $(this)
      .find("i")
      .toggleClass(["fa-eye", "fa-eye-slash"]);
    $("#emojis")
      .find(".emoji-card-title")
      .toggleClass("hide-card");
  });
});

