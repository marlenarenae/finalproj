$(document).ready(function() {

    $(document).on("click", "#search-submit", function() {
        $.ajax({
            type: "GET",
            url: "https://api.spotify.com/v1/search?type=track&limit=5&q=" + encodeURIComponent($("#song-search").val()),
            success: function(data) {
                //Get just the tracks to insert into the template
                var tracks = data.tracks.items;

                HANDLE.renderTemplate({
                    templateSource: "#spotify-template",
                    data: tracks,
                    where: "#spotify-results",
                    clearOriginal: true
                });

                //Display the search query on the UI
                $("#display-for").html('for "' + $("#song-search").val() + '"');

                //Fade in the results when all is done
                $("#results-container").fadeIn();
            },
            error: function() {
                alert("Sorry, your query returned no results.");
            }
        });
    });

});
