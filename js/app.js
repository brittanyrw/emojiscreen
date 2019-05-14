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
            if(data[i].type.length > 1){
              type += '<span class="type multi-type">' + data[i].type[g] + '</span>';
            } else {
              type = '<span class="type">' + data[i].type[g] + '</span>';
            }
            
          }
          
          emojiCard += "<div class='emoji-card'><div class='hint-container'><i class='fas fa-question-circle'></i><p class='hint'>" + type + "</p></div><div class='emoji-images'>" + imgs + "</div><div class='emoji-card-title hide-card'><h2>" + data[i].title + "</h2></div></div>";
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
