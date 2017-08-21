(function ($) {
	$.getJSON("http://api.themoviedb.org/3/discover/movie?api_key=22d8568621673d1336e8d0d1fb253821").then(function (data) {
		$.each(data.results,function(key,value){
			console.log(data);
			$("#movieDetails").append('<li><a href="#" onClick="callMovie('+value.id+'); return false;">' + value.title + '</a></li>');
			
		});
		//$("#movieDetails").append('<li><a href="#" onClick="callMovie('+value.id+','+value.overview+'); return false;">' + value.title + '</a></li>');		

	});

})(jQuery);

function callMovie(movieID){
	//console.log(movieID);
	 $("#leftPart").css("width","50%");
	 $("#right").css("width","50%");
	 $.getJSON("http://api.themoviedb.org/3/movie/"+movieID+"?api_key=22d8568621673d1336e8d0d1fb253821").then(function (data) {
	 var image="https://image.tmdb.org/t/p/w500"+data.backdrop_path;
	 $("#movPoster").attr("src",image);
	 $("#title").html("Movie Title : " +data.title);	
	 $("#language").html("Movie Language : " +data.original_language);
	 $("#releaseDate").html("Release Date :" +data.release_date);
	 $("#popularity").html("Popularity :" +data.popularity);
	 $("#overview").html("Overview :"+data.overview);
	 console.log("image:"+image);

	/*console.log("Movie Title:"+data.title);
	console.log("Movie Original Language:"+data.original_language);
	console.log("Movie Release Date:"+data.release_date);
	console.log("Movie Overview:"+data.overview);
	console.log("Movie Popularity:"+data.popularity);
	console.log("Movie Path:"+data.poster_path);*/
	});

}
$(document).ready(function(){
	$("#about").click(function(){
	$.getJSON("json/abtjs.json",function(data){
		$.each(data.about,function(key,value){
			console.log(key,value);
			$("#aboutOne").append(this['one']);
			$("#aboutTwo").append(this['two']);
		});
	});

});

	});
