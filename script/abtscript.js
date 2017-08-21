$(document).ready(function(){
	$.getJSON("abtjs.json",function(data){
		$.each(data.about,function(key,value){
			console.log(key,value);
			$("#aboutOne").append(this['one']);
			$("#aboutTwo").append(this['two']);
		});
	});

});

(function($){
	$.getJSON("abtjs.json",function(data){
	
	});
})(jQuery);