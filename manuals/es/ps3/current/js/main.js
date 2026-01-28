var hoverColour = "#FFF";

$(function(){
	//menu01
	$("a.hoverBtn01").show("fast", function() {
		$(this).wrap("<div class=\"hoverBtn01\">");
		$(this).attr("class", "");
	});
	
	//display the hover div
	$("div.hoverBtn01").show("fast", function() {
		//append the background div
		$(this).append("<div></div>");
		
		//get link's size
		var wid = $(this).children("a").width();
		var hei = $(this).children("a").height();
		
		//set div's size
		$(this).width(wid);
		$(this).height(hei);
		$(this).children("div").width(wid);
		$(this).children("div").height(hei);
		
		//on link hover
		$(this).children("a").hover(function(){
			//store initial link colour
			if ($(this).attr("rel") == "") {
				$(this).attr("rel", $(this).css("color"));
			}
			//fade in the background
			$(this).parent().children("div")
				.stop()
				.css({"display": "none", "opacity": "1"})
				.fadeIn("fast");
			//fade the colour
			$(this)	.stop()
				.css({"color": $(this).attr("rel")})
				.animate({"color": hoverColour}, 350);
		},function(){
			//fade out the background
			$(this).parent().children("div")
				.stop()
				.fadeOut("slow");
			//fade the colour
			$(this)	.stop()
				.animate({"color": $(this).attr("rel")}, 250);
		});
	});

	//menu02
	$("a.hoverBtn02").show("fast", function() {
		$(this).wrap("<div class=\"hoverBtn02\">");
		$(this).attr("class", "");
	});
	
	//display the hover div
	$("div.hoverBtn02").show("fast", function() {
		//append the background div
		$(this).append("<div></div>");
		
		//get link's size
		var wid = $(this).children("a").width();
		var hei = $(this).children("a").height();
		
		//set div's size
		$(this).width(wid);
		$(this).height(hei);
		$(this).children("div").width(wid);
		$(this).children("div").height(hei);
		
		//on link hover
		$(this).children("a").hover(function(){
			//store initial link colour
			if ($(this).attr("rel") == "") {
				$(this).attr("rel", $(this).css("color"));
			}
			//fade in the background
			$(this).parent().children("div")
				.stop()
				.css({"display": "none", "opacity": "1"})
				.fadeIn("fast");
			//fade the colour
			$(this)	.stop()
				.css({"color": $(this).attr("rel")})
				.animate({"color": hoverColour}, 350);
		},function(){
			//fade out the background
			$(this).parent().children("div")
				.stop()
				.fadeOut("slow");
			//fade the colour
			$(this)	.stop()
				.animate({"color": $(this).attr("rel")}, 250);
		});
	});
	
	//menu03
	$("a.hoverBtn03").show("fast", function() {
		$(this).wrap("<div class=\"hoverBtn03\">");
		$(this).attr("class", "");
	});
	
	//display the hover div
	$("div.hoverBtn03").show("fast", function() {
		//append the background div
		$(this).append("<div></div>");
		
		//get link's size
		var wid = $(this).children("a").width();
		var hei = $(this).children("a").height();
		
		//set div's size
		$(this).width(wid);
		$(this).height(hei);
		$(this).children("div").width(wid);
		$(this).children("div").height(hei);
		
		//on link hover
		$(this).children("a").hover(function(){
			//store initial link colour
			if ($(this).attr("rel") == "") {
				$(this).attr("rel", $(this).css("color"));
			}
			//fade in the background
			$(this).parent().children("div")
				.stop()
				.css({"display": "none", "opacity": "1"})
				.fadeIn("fast");
			//fade the colour
			$(this)	.stop()
				.css({"color": $(this).attr("rel")})
				.animate({"color": hoverColour}, 350);
		},function(){
			//fade out the background
			$(this).parent().children("div")
				.stop()
				.fadeOut("slow");
			//fade the colour
			$(this)	.stop()
				.animate({"color": $(this).attr("rel")}, 250);
		});
	});
	
	//menu04
	$("a.hoverBtn04").show("fast", function() {
		$(this).wrap("<div class=\"hoverBtn04\">");
		$(this).attr("class", "");
	});
	
	//display the hover div
	$("div.hoverBtn04").show("fast", function() {
		//append the background div
		$(this).append("<div></div>");
		
		//get link's size
		var wid = $(this).children("a").width();
		var hei = $(this).children("a").height();
		
		//set div's size
		$(this).width(wid);
		$(this).height(hei);
		$(this).children("div").width(wid);
		$(this).children("div").height(hei);
		
		//on link hover
		$(this).children("a").hover(function(){
			//store initial link colour
			if ($(this).attr("rel") == "") {
				$(this).attr("rel", $(this).css("color"));
			}
			//fade in the background
			$(this).parent().children("div")
				.stop()
				.css({"display": "none", "opacity": "1"})
				.fadeIn("fast");
			//fade the colour
			$(this)	.stop()
				.css({"color": $(this).attr("rel")})
				.animate({"color": hoverColour}, 350);
		},function(){
			//fade out the background
			$(this).parent().children("div")
				.stop()
				.fadeOut("slow");
			//fade the colour
			$(this)	.stop()
				.animate({"color": $(this).attr("rel")}, 250);
		});
	});
	
	//menu05
	$("a.hoverBtn05").show("fast", function() {
		$(this).wrap("<div class=\"hoverBtn05\">");
		$(this).attr("class", "");
	});
	
	//display the hover div
	$("div.hoverBtn05").show("fast", function() {
		//append the background div
		$(this).append("<div></div>");
		
		//get link's size
		var wid = $(this).children("a").width();
		var hei = $(this).children("a").height();
		
		//set div's size
		$(this).width(wid);
		$(this).height(hei);
		$(this).children("div").width(wid);
		$(this).children("div").height(hei);
		
		//on link hover
		$(this).children("a").hover(function(){
			//store initial link colour
			if ($(this).attr("rel") == "") {
				$(this).attr("rel", $(this).css("color"));
			}
			//fade in the background
			$(this).parent().children("div")
				.stop()
				.css({"display": "none", "opacity": "1"})
				.fadeIn("fast");
			//fade the colour
			$(this)	.stop()
				.css({"color": $(this).attr("rel")})
				.animate({"color": hoverColour}, 350);
		},function(){
			//fade out the background
			$(this).parent().children("div")
				.stop()
				.fadeOut("slow");
			//fade the colour
			$(this)	.stop()
				.animate({"color": $(this).attr("rel")}, 250);
		});
	});
	
	//menu06
	$("a.hoverBtn06").show("fast", function() {
		$(this).wrap("<div class=\"hoverBtn06\">");
		$(this).attr("class", "");
	});
	
	//display the hover div
	$("div.hoverBtn06").show("fast", function() {
		//append the background div
		$(this).append("<div></div>");
		
		//get link's size
		var wid = $(this).children("a").width();
		var hei = $(this).children("a").height();
		
		//set div's size
		$(this).width(wid);
		$(this).height(hei);
		$(this).children("div").width(wid);
		$(this).children("div").height(hei);
		
		//on link hover
		$(this).children("a").hover(function(){
			//store initial link colour
			if ($(this).attr("rel") == "") {
				$(this).attr("rel", $(this).css("color"));
			}
			//fade in the background
			$(this).parent().children("div")
				.stop()
				.css({"display": "none", "opacity": "1"})
				.fadeIn("fast");
			//fade the colour
			$(this)	.stop()
				.css({"color": $(this).attr("rel")})
				.animate({"color": hoverColour}, 350);
		},function(){
			//fade out the background
			$(this).parent().children("div")
				.stop()
				.fadeOut("slow");
			//fade the colour
			$(this)	.stop()
				.animate({"color": $(this).attr("rel")}, 250);
		});
	});
	
	//menu07
	$("a.hoverBtn07").show("fast", function() {
		$(this).wrap("<div class=\"hoverBtn07\">");
		$(this).attr("class", "");
	});
	
	//display the hover div
	$("div.hoverBtn07").show("fast", function() {
		//append the background div
		$(this).append("<div></div>");
		
		//get link's size
		var wid = $(this).children("a").width();
		var hei = $(this).children("a").height();
		
		//set div's size
		$(this).width(wid);
		$(this).height(hei);
		$(this).children("div").width(wid);
		$(this).children("div").height(hei);
		
		//on link hover
		$(this).children("a").hover(function(){
			//store initial link colour
			if ($(this).attr("rel") == "") {
				$(this).attr("rel", $(this).css("color"));
			}
			//fade in the background
			$(this).parent().children("div")
				.stop()
				.css({"display": "none", "opacity": "1"})
				.fadeIn("fast");
			//fade the colour
			$(this)	.stop()
				.css({"color": $(this).attr("rel")})
				.animate({"color": hoverColour}, 350);
		},function(){
			//fade out the background
			$(this).parent().children("div")
				.stop()
				.fadeOut("slow");
			//fade the colour
			$(this)	.stop()
				.animate({"color": $(this).attr("rel")}, 250);
		});
	});
	
	
	//menu08
	$("a.hoverBtn08").show("fast", function() {
		$(this).wrap("<div class=\"hoverBtn08\">");
		$(this).attr("class", "");
	});
	
	//display the hover div
	$("div.hoverBtn08").show("fast", function() {
		//append the background div
		$(this).append("<div></div>");
		
		//get link's size
		var wid = $(this).children("a").width();
		var hei = $(this).children("a").height();
		
		//set div's size
		$(this).width(wid);
		$(this).height(hei);
		$(this).children("div").width(wid);
		$(this).children("div").height(hei);
		
		//on link hover
		$(this).children("a").hover(function(){
			//store initial link colour
			if ($(this).attr("rel") == "") {
				$(this).attr("rel", $(this).css("color"));
			}
			//fade in the background
			$(this).parent().children("div")
				.stop()
				.css({"display": "none", "opacity": "1"})
				.fadeIn("fast");
			//fade the colour
			$(this)	.stop()
				.css({"color": $(this).attr("rel")})
				.animate({"color": hoverColour}, 350);
		},function(){
			//fade out the background
			$(this).parent().children("div")
				.stop()
				.fadeOut("slow");
			//fade the colour
			$(this)	.stop()
				.animate({"color": $(this).attr("rel")}, 250);
		});
	});
});
