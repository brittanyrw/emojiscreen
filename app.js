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

// Handles the onload event (ready() in jquery)
window.onload = () => {
    //Create a variable for the container to hold the emoji cards
    var emojiCardContainer = document.getElementById("emojis");
    //Create a variable for emoji cards
    var emojiCard = "";
    // Run the random order function below on the data inside data.js. This will display the cards in a random order on the page every time the page is refreshed.
    shuffle(emojiItems);
     // Loop through the data from the data.js file and insert parts of the data into HTML. On each loop, we are appending a new card with the HTML below.
    for (let e of emojiItems) {
        emojiCard += "<div class='emoji-card' data-filter='" + e.type +
    "'><div class='hint-container'><i class='fas fa-question-circle'></i><p class='hint'><span class='type'>" + e.type +
    "</span></p></div><div class='emoji-images'>" + e.emojiImgs +
    "</div><div class='emoji-card-title hide-card'><h3>" + e.title +
    " (" + e.year + ")" + "</h3></div></div>";
    }
    // Append the emoji card variable, which has all of the emoji cards to the initial variable we created that was for the container to hold the cards.
    emojiCardContainer.innerHTML = emojiCard;
    // Run Twemoji to change all emojis to Twitter emojis.
    twemoji.parse(document.body);
    // Add the count of number of shows/movies to the footer.
    document.querySelector("footer span").innerHTML += emojiItems.length;
    
    // The code that runs the filter buttons at the top of the page. This currently allows users to filter by 'type' (ie musical, movie or tv show).
    Object.values(document.querySelectorAll("#filters button")).forEach(e => {
        e.onclick = () => {
            let filterTag = e.getAttribute("data-filter");
            console.log(filterTag)
            document.getElementById("message").style.display = "none";
            Object.values(document.querySelectorAll("div.emoji-card-title")).forEach(filt => {
                filt.classList.add("hide-card");
            });
            // If the user clicks on view all, show all cards
            if (filterTag === "view-all") {
                console.log("Showing all!");
                Object.values(document.querySelectorAll("div.emoji-card")).forEach(s => {
                    s.style.display = "block";
                })
            } else if (document.querySelectorAll(`div.emoji-card[data-filter='${filterTag}']`).length > 0) { // If the user clicks on movies, musicals or tv shows, show the card that fall into that category and hide all cards that do not fall into that category.
                Object.values(document.querySelectorAll("div.emoji-card")).forEach(g => {
                    g.style.display = g.getAttribute("data-filter") === filterTag ? "block" : "none";
                })
            } else {
                Object.values(document.querySelectorAll("div.emoji-card")).forEach(n => {
                    n.style.display = "none";
                });
                let msg = document.getElementById("message");
                msg.style.display = "block";
                msg.innerHTML = `<p>There are no ${filterTag} cards on this page. 🙁</p>"`;
                
            }
        }
    });
    
    Object.values(document.querySelectorAll("div.emoji-card")).forEach(card => {
        //   Displaying / Hiding the title when clicking the emoji card
        card.onclick = () => {
            card.getElementsByClassName("emoji-card-title")[0].classList.toggle("hide-card");
        }
        // Displaying a hint(type ie tv, movie or musical) when hovering over the question mark
        card.getElementsByClassName("hint-container")[0].onmouseover = () => {
            card.getElementsByClassName("hint")[0].classList.add("hint-reveal");
        }
        card.getElementsByClassName("hint-container")[0].onmouseleave = () => {
            card.getElementsByClassName("hint")[0].classList.remove("hint-reveal")
        }
    })
    let eye = document.getElementsByClassName("btn-reveal-all")[0]
    eye.onclick = () => {
        // Changes the title of 'eye' icon to reveal/hide and icon according to the situation
        //eye.setAttribute("title", eye.getAttribute("title") === "Hide All" ? "Reveal All" : "Hide All");
        let icon = eye.getElementsByTagName("i")[0]
        if (eye.getAttribute("title") === "Reveal All") {
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
            eye.setAttribute("title", "Hide All");
        } else {
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");
            eye.setAttribute("title", "Reveal All");
        }
        // Toggles the titles of the emoji card
        Object.values(document.getElementsByClassName("emoji-card-title")).forEach(title => {
            title.classList.toggle("hide-card")
        })
    }
}
