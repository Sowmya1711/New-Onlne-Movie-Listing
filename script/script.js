(function ($) {
	$.getJSON("http://api.themoviedb.org/3/discover/movie?api_key=22d8568621673d1336e8d0d1fb253821").then(function (data) {
		$.each(data.results,function(key,value){
			console.log(data);
			$("#movieDetails").append('<li><a href="#" onClick="callMovie('+value.id+'); return false;">' + value.title + '</a></li>');
			
		});
		
	});

})(jQuery);

function callMovie(movieID){
	//console.log(movieID);
	 $("#leftPart").css("width","50%");
	 $("#right").css("width","50%");
	 $.getJSON("http://api.themoviedb.org/3/movie/"+movieID+"?api_key=22d8568621673d1336e8d0d1fb253821").then(function (data) {
	 var image="https://image.tmdb.org/t/p/w500"+data.backdrop_path;
	 $("#movPoster").attr("src",image).css("border-width","thin");
	 $("#movPoster").attr("src",image).css("border-color","black");
	 $("#movPoster").attr("src",image).css("border-style","solid");	
	 $("#title").html("<b>MOVIE TITLE </b>: " +data.title);	
	 $("#language").html("<b>MOVIE LANGUAGE </b> : " +data.original_language);
	 $("#releaseDate").html("<b>RELEASE DATE </b>:" +data.release_date);
	 $("#popularity").html("<b>POPULARITY </b>:" +data.popularity);
	 $("#overview").html("<b>OVERVIEW </b>:"+data.overview);
	 console.log("image:"+image);
	});
}


// about
function aboutUs(aboutId){
	$.getJSON("json/abtjs.json",function(data){
	$.each(data.about,function(key,value){
			console.log(key,value);
			$("#home").html(aboutWrap(value.title,value.contentOne));
	});
		});
}

function aboutWrap(title,contentOne){
	var output= '<div class="about"> <span class="title"> '+title+'<br> </span> <span class="contentOne">' +contentOne+'</span> </div>';
	return output;
}

$(document).ready(function(){
$("#contactUs").dblclick(function(){
$("#home").html(
$("<form/>",{action:'#', method:'#'}).append(   
$("<input/>",{type:'text',id:'vname',name:'name',placeholder:'your name'}),
$("<br/>"),
$("<br/>"),
$("<input/>",{type:'text',id:'vemail',name:'email',placeholder:'your email'}),
$("<br/>"),
$("<br/>"),
$("<textarea/>",{rows:'5px',cols:'27px',type:'text',id:'vmsg',name:'msg',placeholder:'message'}),
$("<br/>"),
$("<br/>"),
$("<input/>",{type:'submit',id:'submit',value:'submit'}),$("<br/>"),$("<br/>")
	))
});
});


