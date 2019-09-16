var anime = ["Kiki's Delivery Service", "My Neighbor Totoro", "Spirited Away", "Princess Mononoke", "Howl's Moving Castle", "Attack on Titan", "Naruto", "Durarara", "Sailor Moon", "Dragon Ball Z"];

function makeButtons() {
    $("#buttonsDiv").empty(); //empties div to avoid duplicates

    //make buttons with attributes for each item in array
    for (var i = 0; i < anime.length; i++) {
        var button = $("<button>");
        button.html(anime[i]);
        button.addClass("btn btn-outline-secondary");
        button.attr("anime-title", anime[i]);
        button.text(anime[i]);
        $("#buttonsDiv").append(button);
    }
}
//what happens when you click the button with title
$("button").on("click", function () {
    var thisAnime = $(this).attr("anime-title");
    console.log(thisAnime);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + thisAnime + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    // ajax call gets and returns the response object from query url
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // Storing an array of results in the results variable
        var results = response.data;
        //loop to ceate a div that contains image and filters ratings
        for (var i = 0; i < results.length; i++) {
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                var gifDiv = $("<div>");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                var animeImage = $("<img>");
                animeImage.attr("src", results[i].images.fixed_height.url);
                gifDiv.append(p);
                gifDiv.append(animeImage);

                $("#gifs-appear-here").prepend(gifDiv);
            }
        }
    });
});

makeButtons();