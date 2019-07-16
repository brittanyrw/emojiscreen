$(document).ready(function() {
 
    var displayResources = $("#emojis");

    $.ajax({
      type: "GET",
      url: "../data.json", 
      success: function(data) {

        var emojiCard = '';
        
        for (var i in data) {

          var imgs = '';
          for (var j = 0; j < data[i].emojiImgs.length; j++){
            imgs += '<img src="../emojis/' + data[i].emojiImgs[j] + '" alt="' + data[i].emojiImgs[j] + '">';
          }
          
          emojiCard += "<div class='emoji-card'><div class='hint-container'><i class='fas fa-question-circle'></i><p class='hint'><span class='type'>" + data[i].type + "</span></p></div><div class='emoji-images'>" + imgs + "</div><div class='emoji-card-title hide-card'><h2>" + data[i].title + " (" + data[i].year + ")" + "</h2></div></div>";
        }
        
        displayResources.html(emojiCard);
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
