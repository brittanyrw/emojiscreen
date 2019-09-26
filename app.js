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

  function generateTitle(title, year, itemLink) {
    const titleElement = "<h3>" + title +" (" + year + ")</h3>"
    if(itemLink) {
      return "<a title='Go to website' href='" + itemLink + "' target='_blank'>" + titleElement + "</a>"
    }
    return titleElement
  }
});

var dark=true;
        const btn= document.getElementById('switch');
       
       
        btn.addEventListener('click',
        function ifClicked(){
           
           if(!dark){
            document.getElementById('bc').style.backgroundColor="#292932";
            //document.getElementById('bc').style.color="white";
            document.getElementById('head-txt').style.color = "white";
            document.getElementById('con-card').style.color = "white";
            document.getElementById('clc').style.color = "white";
            var x = document.getElementById("last");
            var y = x.getElementsByTagName("P");
            var i;
            for (i = 0; i < y.length; i++) {
              y[i].style.color = "white";
            } 
            document.getElementById("last-link").style.color="white"; 
            document.getElementById("filters").style.borderBottom="2px solid white";
            document.getElementById("last").style.borderTop="2px solid white";
            document.getElementById('bulb').style.color="white";
            dark=true;
           }
           else{
            document.getElementById('bc').style.backgroundColor="white";
            //document.getElementById('bc').style.color="black";
            document.getElementById('head-txt').style.color = "black";
            document.getElementById('con-card').style.color = "black";
            document.getElementById('clc').style.color = "black";
            var x = document.getElementById("last");
            var y = x.getElementsByTagName("P");
            var i;
            for (i = 0; i < y.length; i++) {
              y[i].style.color = "black";
            } 
            document.getElementById("last-link").style.color="black"; 
            document.getElementById("filters").style.borderBottom="2px solid black";
            document.getElementById("last").style.borderTop="2px solid black";
            document.getElementById('bulb').style.color="black";
            dark=false;
           }
        });