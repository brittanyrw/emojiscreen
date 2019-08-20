$(document).ready(function() {
    // Create a variable for the container to hold the emoji cards.
    var emojiCardContainer = $("#emojis");

    // Request the movie/show data from the data.json file
    $.ajax({
      type: "GET",
      url: "../../data.json", 
      success: function(data) {
        var emojiData = data;

        $("#pagination").pagination({
          // Run the random order function below on the data we recieve back from the ajax request on data.json.
          dataSource: shuffle(emojiData),
          locator: "items",
          totalNumber: emojiData.length,
          pageSize: 24,
          prevText: '<',
          nextText: '>',
          ajax: {
            beforeSend: function() {
              emojiCardContainer.html(
                "Loading data from flickr.com ..."
              );
            }
          },
          callback: function(data, pagination) {
            // Create a variable for the emoji cards.
            var emojiCard = "";
        
            // Loop through the data from the data.json file and insert parts of the data into HTML. On each loop, we are appending a new card.
            for (var i in data) {
              emojiCard +=
                "<div class='emoji-card'><div class='hint-container'><i class='fas fa-question-circle'></i><p class='hint'><span class='type'>" +
                data[i].type +
                "</span></p></div><div class='emoji-images'>" +
                data[i].emojiImgs +
                "</div><div class='emoji-card-title hide-card'><h3>" +
                data[i].title +
                " (" +
                data[i].year +
                ")" +
                "</h3></div></div>";
            }
            // Append the emoji card variable, which has all of the emoji cards to the initial variable we created that was for the container to hold the cards.
            emojiCardContainer.html(emojiCard);
            
            // Run Twemoji to change all emojis to Twitter emojis.
            twemoji.parse(document.body);
          }
        });

        // Add the count of number of shows/movies to the footer.
        $('footer span').append(data.length);
      }
    });

    // Function to display movies and shows in a random order, the random order will refresh on page reload
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      while (currentIndex !== 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
      }

      return array;
    }

    // Display total count of movies and shows in the footer
    $('#emojis').on('click', '.emoji-images', function() {
        $(this).siblings('.emoji-card-title').toggleClass("hide-card");
    });

    // Display a hint (type ie tv, movie or musical) when hovering over the question mark.
    $('#emojis').on('mouseover', '.hint-container', function() {
        $(this).find('.hint').addClass("hint-reveal");
    });

    // Hide hint (type ie tv, movie or musical) when the user stops hovering over the question mark.
    $('#emojis').on('mouseleave', '.hint-container', function() {
      $(this).find('.hint').removeClass("hint-reveal");
    });

    // Toggle to expand or hide all of the movie/show names by clicking an icon
    $('.btn-reveal-all').click(function() {
      var title = $(this).attr('title');
      title = title.search(/reveal/i) === -1 ? title.replace(/hide/i, 'Reveal') : title.replace(/reveal/i, 'Hide');
      $(this).attr('title', title);

      $(this).find('i').toggleClass(['fa-eye','fa-eye-slash']);
      $('#emojis').find('.emoji-card-title').toggleClass("hide-card");
    });
    

});
