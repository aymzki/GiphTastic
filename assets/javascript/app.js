 var ghibliMovies = ["Kiki's Delivery Service", "My Neighbor Totoro", "Spirited Away", "Princess Mononoke", "Nausicaa", "Howl's Moving Castle", "The Wind Rises"];
  
 function makeButtons() {
     $("#buttonsDiv").empty(); //empties div to avoid duplicates

    //make buttons with attributes for each item in array
    for (var i = 0; i < ghibliMovies.length; i++) {
        var button = $("<button>");
        button.html(ghibliMovies[i]);
        button.addClass("btn btn-outline-secondary");
        button.attr("movie-title", ghibliMovies[i]);
        button.text(ghibliMovies[i]);
		$("#buttonsDiv").append(button);
    }
 }
 
makeButtons();

 

// $("button").on("click", function() {
//     // In this case, the "this" keyword refers to the button that was clicked
//     var person = $(this).attr("data-movie");

//     // Constructing a URL to search Giphy for the name of the person who said the quote
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//       person + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

//     // ajax call
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     })
//       // After the data comes back from the API
//       .then(function(response) {
//         // Storing an array of results in the results variable
//         var results = response.data;

//         // Looping the result item
//         for (var i = 0; i < results.length; i++) {

//           // Only taking action if the photo has an appropriate rating
//           if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
            
//             //create div for the gif
//             var gifDiv = $("<div>");

//             //store the result item's rating
//             var rating = results[i].rating;

//             // paragraph tag with the result item's rating
//             var p = $("<p>").text("Rating: " + rating);

//             // create an image tag
//             var ghibliImage = $("<img>");

//             // give the image tag an src attribute of a proprty pulled off the
//             // result item
//             ghibliImage.attr("src", results[i].images.fixed_height.url);

//             // Appending the paragraph and personImage we created to the "gifDiv" div we created
//             gifDiv.append(p);
//             gifDiv.append(ghibliImage);

//             // Prepend gifDiv to the "#gifs-appear-here" div in the HTML
//             $("#gifs-appear-here").prepend(gifDiv);
//           }
//         }
//       });
//   });
//