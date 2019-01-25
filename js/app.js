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
            imgs += '<img src="../imgs/' + data[i].emojiImgs[j] + '.svg" alt="' + data[i].emojiImgs[j] + '">';
          }
          
          emojiCard += "<div class='emoji-card'><div class='emoji-images'>" + imgs + "</div><div class='emoji-card-title hide-card'><h2>" + data[i].title + "</h2></div></div>";
        }



        displayResources.html(emojiCard);
      }
    });

    $('#emojis').on('click', '.emoji-card', function() {
      $(this).find('.emoji-card-title').toggleClass("hide-card");
  });

    // $(".emoji-card" ).click(function() {
    //   alert('click');
    //   $(this).find('.emoji-card-title').removeClass("hide-card");
    //   $(this).find('.emoji-card-title').addClass("reveal-card");
    // });

});
