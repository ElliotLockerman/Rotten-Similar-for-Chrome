//*********************************************************************
// create the panel and put in the loading gif


var divs = document.getElementsByTagName("div");
var i;
var movie_info;

// get the elment we want to append after, in this case, the class includes movie_info
for (i in divs)
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


// add the title and loading gif
//var loading_gif = chrome.extension.getURL("ajax-loader.gif");
similar_div.innerHTML =  "<h2 id=\"similar_title\">Similar Movies</h2>";


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


var spinner = new Spinner(opts).spin();
document.getElementById("similar_title").parentNode.insertBefore(spinner.el, document.getElementById("similar_title").nextSibling);
//spinner.style.position = "relative"; //for some reason, its absolute by default


//*********************************************************************







//*********************************************************************
// First query - get the id by searching and taking the first result
var api_key = "5vdj7je2uqr83vvx6rnqb4vh";
var base_URL = "http://api.rottentomatoes.com/api/public/v1.0"



// Get the title from the HTML
var title = document.querySelector('[itemprop=name]').textContent.trim(); 
title = title.replace(/\s+\(/, " ("); // Get rid of the formatting (replace countless spaces [and a newline] [ending in an open paren, so we get all the spaces] with a single space and the paren we deleted).


var movie_ID = -1;
var search_URL = base_URL + "/movies.json?q=" + encodeURIComponent(title) + "&page_limit=1&page=1&apikey=" + api_key;


var xhr = new XMLHttpRequest();
xhr.open("GET", search_URL, true);
xhr.onreadystatechange = function(data)
{
    if (xhr.readyState == 4) 
	{
		results = JSON.parse(xhr.responseText);
		get_similar(results.movies[0].id, 6);
	}
}

xhr.send();
//*********************************************************************







//*********************************************************************
// Get a JSON of similar movies
// Gets called at least once, when the ID returns
function get_similar(movie_ID, num_to_load)
{
	spinner.stop();
	console.log("Movie ID: " + movie_ID); 
	//similar_div.innerHTML =  "<h2 id=\"similar_title\">Similar Movies</h2>";
	similar_div.innerHTML = similar_div.innerHTML + "<br>Movie ID: " + movie_ID;
	
	spinner.spin();	
	
	
	
	
}

//*********************************************************************




//*********************************************************************
// Dislplay the similar movies received
// Gets called at least once, when the first similar query returns
function append_similar(similar_movies)
{
	
	
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