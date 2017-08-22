var API_KEY="http://api.themoviedb.org/3/discover/movie";
var POSTER_PATH="https://image.tmdb.org/t/p/w500";
var KEY="?api_key=22d8568621673d1336e8d0d1fb253821";
var URL="http://api.themoviedb.org/3/movie/";

(function ($) {
	$.getJSON(API_KEY+KEY).then(function (data) {
		$.each(data.results,function(key,value){
			$("#movieDetails").append('<li><a href="#" onClick="callMovie('+value.id+'); return false;">' + value.title + '</a></li>');	
		});
	});
})(jQuery);

function callMovie(movieID){
	 $("#leftPart").css("width","50%");
	 $("#right").css("width","50%");
	 $.getJSON(URL+movieID+KEY).then(function (data) {
	 var image=POSTER_PATH+data.backdrop_path;
	 $("#movPoster").attr("src",image).css({"border-width":"thin","border-color":"black","border-style":"solid"});
	 $("#title").html("<b>MOVIE TITLE </b>: " +data.title);	
	 $("#language").html("<b>MOVIE LANGUAGE </b> : " +data.original_language);
	 $("#releaseDate").html("<b>RELEASE DATE </b>:" +data.release_date);
	 $("#popularity").html("<b>POPULARITY </b>:" +data.popularity);
	 $("#overview").html("<b>OVERVIEW </b>:"+data.overview);
	});
}

function aboutUs(aboutId){
	$.getJSON("json/abtjs.json",function(data){
	$.each(data.about,function(key,value){
		$("#home").html(aboutWrap(value.title,value.contentOne));
	});
		});
}

function aboutWrap(title,contentOne){
	var output= '<div class="about"> <span class="title"> '+title+'<br> \
	</span> <span class="contentOne">' +contentOne+'</span> </div>';
	return output;
}
function contactUs(contactusId){
	$("#home").html(
	$("<form/>",{action:'#', method:'#'}).append(   
	$("<input/>",{type:'text',id:'vname',name:'name',placeholder:'your name'}),
	$("<input/>",{type:'text',id:'vemail',name:'email',placeholder:'your email'}),
	$("<textarea/>",{rows:'5px',cols:'27px',type:'text',id:'vmsg',name:'msg',placeholder:'message'}),
	$("<input/>",{type:'submit',id:'submit',value:'submit'}),$("<br/>"),$("<br/>")
	))
}



