$(document).ready(function() {

    var displayResources = $("#emojis");

    $.ajax({
      type: "GET",
      url: "../data.json", 
      success: function(data) {

        var emojiCard = '';
        
        for (var i in data) {
          
          emojiCard += "<div class='emoji-card'><div class='hint-container'><i class='fas fa-question-circle'></i><p class='hint'><span class='type'>" + data[i].type + "</span></p></div><div class='emoji-images'>" + data[i].emojiImgs + "</div><div class='emoji-card-title hide-card'><h3>" + data[i].title + " (" + data[i].year + ")" + "</h3></div></div>";
        }
        
        displayResources.html(emojiCard);
        twemoji.parse(document.body);
      }
    });


    $('#emojis').on('click', '.emoji-images', function() {
        $(this).siblings('.emoji-card-title').toggleClass("hide-card");
    });

    $('#emojis').on('mouseover', '.hint-container', function() {
        $(this).find('.hint').addClass("hint-reveal");
    });

    $('#emojis').on('mouseleave', '.hint-container', function() {
      $(this).find('.hint').removeClass("hint-reveal");
    });

});
