$(document).ready(function(){
	menupositioning();
});

$(window).resize(function() {
	menupositioning();
});

function menupositioning() {
	var height = $("#mainNav").height();
		var menuheight = height - 27;
		$("#Nav").css("top", menuheight + "px");
		$(".halfboxshadow").css("top", menuheight + "px");
}