var animeArray = ["Kiki's Delivery Service", "My Neighbor Totoro", "Spirited Away", "Princess Mononoke", "Howl's Moving Castle", "Attack on Titan", "Naruto", "Durarara", "Sailor Moon", "Dragon Ball Z"];

//create buttons for already existing titles in the array
function makeButtons() {
    $("#buttonsDiv").empty(); //empties div to avoid duplicates

    //make buttons with attributes for each item in array
    for (var i = 0; i < animeArray.length; i++) {
        var button = $("<button>");
        button.html(animeArray[i]);
        button.addClass("btn btn-outline-secondary");
        button.attr("anime-title", animeArray[i]);
        button.text(animeArray[i]);
        $("#buttonsDiv").append(button);
    }
}

//function to display gifs
function displayGifs () {

    var thisAnime = $(this).attr("anime-title");
    console.log(thisAnime);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + thisAnime + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
    console.log(queryURL);

    // ajax call gets and returns the response object from query url
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // Storing an array of results in the results variable
        var results = response.data;
        //loop to ceate a div that contains image and filters ratings
        for (var i = 0; i < response.length; i++) {
            if (response[i].rating !== "r") {
                var gifDiv = $("<div>");
                var rating = response[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                p.addClass("text-center");

                //and has the gif be still image when it loads
                var gifImage = $("<img>");
                gifImage.addClass("gif");
                gifImage.attr("src", response[i].images.fixed_height_still.url);
                gifImage.attr("data-still", response[i].images.fixed_height_still.url);
                gifImage.attr("data-animate", response[i].images.fixed_height_still.url);
                gifImage.attr("data-state", "still");

                //place image and rating in div
                gifDiv.append(p);
                gifDiv.append(gifImage);

                //put gifDiv at top of the content
                $("#gifs-appear-here").prepend(gifDiv);
            }
        }
    });
};

// when the submit button is clicked, the input value is pushed to the anime array and rendered into a new button
$("#submit-btn").on("click", function(event) {
	event.preventDefault();

	var addAnime = $("#animeInput").val().trim();
	animeArray.push(addAnime);
	makeButtons();
});



makeButtons();