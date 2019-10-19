$(document).ready(function() {
  // Create a variable for the container to hold the emoji cards.
  var emojiCardContainer = $("#emojis");

  // Create a variable for the emoji cards.
  var emojiCard = "";

  // Run the random order function below on the data inside data.js. This will display the cards in a random order on the page every time the page is refreshed.
  shuffle(emojiItems);

  // Loop through the data from the data.js file and insert parts of the data into HTML. On each loop, we are appending a new card with the HTML below.
  for (var i in emojiItems) {
    const type = emojiItems[i].type
    const emojiImgs = emojiItems[i].emojiImgs
    const year = emojiItems[i].year
    const title = emojiItems[i].title
    const itemLink = emojiItems[i].itemLink

    emojiCard +=
      "<div class='emoji-card' data-filter='" + type +
    "'><div class='hint-container'><i class='fas fa-question-circle'></i><p class='hint'><span class='type'>" + type +
    "</span></p></div><div class='emoji-images'>" + emojiImgs +
    "</div><div class='emoji-card-title hide-card'>" +
      generateTitle(title, year, itemLink) +
    "</div></div>";
  }

  // Append the emoji card variable, which has all of the emoji cards to the initial variable we created that was for the container to hold the cards.
  emojiCardContainer.html(emojiCard);

  // Run Twemoji to change all emojis to Twitter emojis.
  twemoji.parse(document.body);

  // Add the count of number of shows/movies to the footer.
  $("footer span").append(emojiItems.length);


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
  $("#filters button").each(function() {
    $(this).on("click", function() {
      var filtertag = $(this).attr("data-filter");
      $("#message").hide();
      $("div.emoji-card-title").addClass("hide-card");
      if (filtertag == "view-all") { // If the user clicks on view all, show all cards.
        $("div.emoji-card").show();
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
    $(this).toggleClass(["revealed"])
    var emojis = $("#emojis")
      .find(".emoji-card-title");
    if($(this).hasClass("revealed")){
      emojis.removeClass("hide-card");
    } else {
      emojis.addClass("hide-card");
    }
    var title = $(this).attr("title");
    title =
      title.search(/reveal/i) === -1
        ? title.replace(/hide/i, "Reveal")
        : title.replace(/reveal/i, "Hide");
    $(this).attr("title", title);

    $(this)
      .find("i")
      .toggleClass(["fa-eye", "fa-eye-slash"]);
  });

  var update = updateEmojisWidthBy(25);
  // Expand all emojis by 10% when expand button is clicked
  $("#btn-expand-all").click(update);
  // Shrink all emojis by 10% when expand button is clicked
  $("#btn-shrink-all").click(update);

  /*
   * Values are "cached" via closure to keep track of the
   * initial state. Increment argument can be changed above
   * on line 118, as an argument, where updateEmojisWidthBy
   * gets called.
   */
  function updateEmojisWidthBy (increment) {
    var initialWidth = Number($(".emoji-images img").css("width").slice(0, -2)),
        percentage = 100,
        expandTitle = $("#btn-expand-all").attr("title"),
        shrinkTitle = $("#btn-shrink-all").attr("title");
    return function update () {
      var role = $(this)[0].id.split('-')[1],
          $emojisContainer = $("#emojis"),
          $emojiImage = $(".emoji-images img"),
          $btnExpandAll = $("#btn-expand-all"),
          $btnShrinkAll = $("#btn-shrink-all");

      switch (role) {
        case "expand":
          percentage += increment;
          if (
            !$emojisContainer.hasClass("expanded") &&
            percentage > 100
          ) {
            $emojisContainer.addClass("expanded");
            $btnExpandAll.addClass("active");
          }
          break;
        case "shrink":
          percentage -= increment;
          if (
            !$btnShrinkAll.hasClass("active") &&
            percentage < 100
          ) {
            $btnShrinkAll.addClass("active");
          }
          break;
      }

      $btnExpandAll.attr("title", percentage + '%');
      $btnShrinkAll.attr("title", percentage + '%');
      $emojiImage.css('width', `${Math.round(initialWidth * percentage / 100)}`);

      if (percentage == 100) {
        $btnExpandAll.attr("title", expandTitle);
        $btnShrinkAll.attr("title", shrinkTitle);
        if ($emojisContainer.hasClass("expanded")) {
          $emojisContainer.removeClass("expanded");
          $btnExpandAll.removeClass("active");
        }
        if ($btnShrinkAll.hasClass("active")) {
          $btnShrinkAll.removeClass("active");
        }
      }
    }
  }

  function generateTitle(title, year, itemLink) {
    const titleElement = "<h3>" + title +" (" + year + ")</h3>"
    if(itemLink) {
      return "<a title='Go to website' href='" + itemLink + "' target='_blank'>" + titleElement + "</a>"
    }
    return titleElement
  }
});
