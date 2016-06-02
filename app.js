$(document).ready(function(){

	$(document).on("click", "#search-button", function() {

    	$(".btn")
    		.css("text-muted");		




	var songID = $("#song-title").val();
	$('#songID').text(songID);


	
	$.ajax({
			type: "GET",
			url: "https://api.spotify.com/v1/search?q=" + songID +"&type=track",
			success: function(song) {
				$('#song-name-1').text(song.tracks.items[0].name)
				$('#artist-name-1').text(song.tracks.items[0].artists[0].name)
				$('#album-name-1').text(song.tracks.items[0].album.name)
				$('#song-1').attr('src', song.tracks.items[0].preview_url)

				$('#song-name-2').text(song.tracks.items[1].name)
				$('#artist-name-2').text(song.tracks.items[1].artists[0].name)
				$('#album-name-2').text(song.tracks.items[1].album.name)
				$('#song-2').attr('src', song.tracks.items[1].preview_url)

				$('#song-name-3').text(song.tracks.items[2].name)
				$('#artist-name-3').text(song.tracks.items[2].artists[0].name)
				$('#album-name-3').text(song.tracks.items[2].album.name)
				$('#song-3').attr('src', song.tracks.items[2].preview_url)

				$('#song-name-4').text(song.tracks.items[3].name)
				$('#artist-name-4').text(song.tracks.items[3].artists[0].name)
				$('#album-name-4').text(song.tracks.items[3].album.name)
				$('#song-4').attr('src', song.tracks.items[3].preview_url)

				$('#song-name-5').text(song.tracks.items[4].name)
				$('#artist-name-5').text(song.tracks.items[4].artists[0].name)
				$('#album-name-5').text(song.tracks.items[4].album.name)
				$('#song-5').attr('src', song.tracks.items[4].preview_url)
				


				$("search-input-box").fadeOut(function() {

					HANDLE.renderTemplate({
						templateSource: "#song-template",
						data: song,
						where: "#song-container",
						clearOriginal: true
					});

				});				

			},

			error: function(){
				alert("Could not get song");
			}
		});



	$.ajax({
				type: "GET",
				url: "http://api.soundcloud.com/tracks.json?client_id=db46e7bcfb5e2a36618d46e89a14eb1e&q=" + title,
				success: function(song) {
					$('#song-name').text(song.name)
					$('#artist-name').text(song.artists[0].name)
					$('#album-name').text(song.album.name)


					$("search-input-box").fadeOut(function() {

						HANDLE.renderTemplate({
							templateSource: "#song-template",
							data: song,
							where: "#song-container",
							clearOriginal: true
						});

					});				

				},

				error: function(){
					alert("Could not get song");
				}
			});

	});
});

