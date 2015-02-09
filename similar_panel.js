//*********************************************************************
// create the panel and put in the loading gif



// get the elment we want to append after, in this case, the class includes movie_info
var divs = document.getElementsByTagName("div");
var movie_info;

for (var i in divs)
{
	if((' ' + divs[i].className + ' ').indexOf(' ' + "movie_info" + ' ') > -1) 
	{
		movie_info = divs[i];
	}
}

// add the hr
var rule = document.createElement("hr");
movie_info.parentNode.insertBefore(rule, movie_info.nextSibling);

// add our div, id = "panel"
var similar_div = document.createElement("div");
similar_div.setAttribute("id", "similar_panel");
movie_info.parentNode.insertBefore(similar_div, rule.nextSibling);


// add the title and inner div (with the similar movies, which will slide)
//var loading_gif = chrome.extension.getURL("ajax-loader.gif");
similar_div.innerHTML =  "<h2 id=\"similar_title\">Similar Movies</h2><div id = \"similar_inner_panel\"></div>";
var inner = document.getElementById("similar_inner_panel");




var spinner = start_Spinner();



// Get the ID
//<meta name="movieID" content="22501">
var metas = document.getElementsByTagName("META");
var movie_ID;
for (i in metas)
{
	if (metas[i].name === "movieID")
	{
		movie_ID = metas[i].content;
		break;
	}
}




// Get the first set of similars
get_similar(movie_ID, 6)

//*********************************************************************









//*********************************************************************
// Get a JSON of similar movies
// Gets called at least once, when the ID returns
function get_similar(movie_ID, num_to_load)
{
	spinner.stop();
	inner.innerHTML = "<br>Movie ID: " + movie_ID;
	
	spinner = start_Spinner();	
	
	
	
	
}

//*********************************************************************






function shift_right()
{
	
	
}

function shift_left()
{
	
	
}


function load_more()
{
	
}


//*********************************************************************
// Start the spinner. Returns a reference to the spinner so you can stop it
function start_Spinner()
{
	var opts = {
	  lines: 13, // The number of lines to draw
	  length: 10, // The length of each line
	  width: 3, // The line thickness
	  radius:10, // The radius of the inner circle
	  corners: 1, // Corner roundness (0..1)
	  rotate: 0, // The rotation offset
	  direction: 1, // 1: clockwise, -1: counterclockwise
	  color: '#000', // #rgb or #rrggbb or array of colors
	  speed: 1, // Rounds per second
	  trail: 60, // Afterglow percentage
	  shadow: false, // Whether to render a shadow
	  hwaccel: false, // Whether to use hardware acceleration
	  className: 'spinner', // The CSS class to assign to the spinner
	  zIndex: 2e9, // The z-index (defaults to 2000000000)
	  top: '50%', // Top position relative to parent
	  left: '50%' // Left position relative to parent
	};


	 return new Spinner(opts).spin(inner);
}
//*********************************************************************
