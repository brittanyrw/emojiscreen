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
            imgs += '<img src="../emojis/' + data[i].emojiImgs[j] + '.png" alt="' + data[i].emojiImgs[j] + '">';
          }
          var type = '';
          for (var g = 0; g < data[i].type.length; g++){ 
            type = data[i].type[g];
          }
          
          emojiCard += "<div class='emoji-card'><div class='emoji-images'>" + imgs + "</div><div class='emoji-card-title hide-card'><h2>" + data[i].title + "</h2></div></div>";
        }



        displayResources.html(emojiCard);
      }
    });

    $('#emojis').on('click', '.emoji-card', function() {
      $(this).find('.emoji-card-title').toggleClass("hide-card");
  });

  $('#emojis').on('click', '.hint-container', function() {
      $(this).find('.hint').toggleClass("hide-card");
  });

  $('#emojis').on('mouseover', '.hint-symbol', function() {
      $(this).find('.hint').toggleClass("hide-card");
  });


});
