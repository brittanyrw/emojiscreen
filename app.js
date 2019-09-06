$(document).ready(function() {
  // Create a variable for the container to hold the emoji cards.
  var emojiCardContainer = $("#emojis");

  // Create a variable for the emoji cards.
  var emojiCard = "";

  // Run the random order function below on the data inside data.js. This will display the cards in a random order on the page every time the page is refreshed.
  shuffle(emojiItems);

  // Loop through the data from the data.js file and insert parts of the data into HTML. On each loop, we are appending a new card with the HTML below.
  for (var i in emojiItems) {
    emojiCard +=
      "<div class='emoji-card' data-filter='" + emojiItems[i].type +
    "'><div class='hint-container'><i class='fas fa-question-circle'></i><p class='hint'><span class='type'>" + emojiItems[i].type +
    "</span></p></div><div class='emoji-images'>" + emojiItems[i].emojiImgs +
    "</div><div class='emoji-card-title hide-card'><h3>" + emojiItems[i].title +
    " (" + emojiItems[i].year + ")" + "</h3></div></div>";
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
      filteredCards = document.querySelectorAll('div.emoji-card:not([style*="display: none"])');
      gotoPage(1); //paginate after filtering
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

  //listen to pagintaion button click
  document.addEventListener('click', function(e){
    //check if pagetBtn was clicked
    if(e.target.className.indexOf('pageBtn') >= 0) 
      gotoPage(e.target.dataset.target);
    else if(e.target.parentElement.className.indexOf('pageBtn') >= 0)
      gotoPage(e.target.parentElement.dataset.target);
  });

  //store filtered emoji cards for pagination
  var filteredCards = document.querySelectorAll('div.emoji-card');
  var currentPage = 1;

  //goto page function
  function gotoPage(pageNo){
    if(pageNo == 'prev')
      pageNo =  currentPage - 1;
    else if(pageNo == 'next')
      pageNo = currentPage + 1;

    var count = 30; //no of emojis per page
    var pageCount = Math.ceil(filteredCards.length / count);
    var startIndex = (pageNo - 1) * count;
    var endIndex = startIndex + count;
    if(pageNo <= 0 || pageNo > pageCount) //if page doesnt exist
      return; 

    //create pagination buttons for the page
    createPaginationButtons(pageNo, pageCount);
    currentPage = Number(pageNo);
    
    //hide and show emoji-cards for the page
    for(const [i, card] of filteredCards.entries())
      card.style.display = (i >= startIndex && i < endIndex) ?  'inline-block' : ' none';
 
  }

  function createPaginationButtons(pageNo, pageCount){
    var paginationSect = document.getElementById('pagination');
    var pageButtons = document.getElementsByClassName('pageBtn');    
    if(pageCount > 1){
      //show pagination
      paginationSect.style.display = 'flex';
      paginationSect.innerHTML = '';

      //create and insert the buttons
      paginationSect.innerHTML += ('<button class="pageBtn" data-target="prev"><i class="fas fa-angle-left"></i></button>');
      for(var i = 1; i <= pageCount; i++){
        paginationSect.innerHTML += ('<button class="pageBtn" data-target="' + i + '"> ' + i + ' </button>')
      }
      paginationSect.innerHTML += ('<button class="pageBtn" data-target="next"><i class="fas fa-angle-right"></i></button>')
      
      //set activepage btn color
      for(const btn of pageButtons)
        (btn.dataset.target == pageNo) ? btn.classList.add('active') : btn.classList.remove('active');

    }else{
      //hide pagintaion if only one page
      paginationSect.style.display = ' none';
    }
  }
  gotoPage(1); //init pagination for the first time
});

