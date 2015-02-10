//*********************************************************************
// Do all the one-time and preperations thingsthings

// create the panel
// get the elment we want to append after, in this case, the class includes movie_info (it looks like they only use movie_info once, so it should be an ID. Would certainly make my live easier)
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


// add the title, buttons, and inner div (with the similar movies, which will slide)
//var loading_gif = chrome.extension.getURL("ajax-loader.gif");
similar_div.innerHTML =  "<h2>Similar Movies</h2></div>";

/*
var left_button = document.createElement("span");
left_button.setAttribute("id", "left_button");
similar_div.appendChild(left_button);
*/

inner = document.createElement("div");
inner.setAttribute("id", "similar_inner_pannel")
similar_div.appendChild(inner);

/*
var right_button = document.createElement("span");
right_button.setAttribute("id", "right_button");
similar_div.appendChild(right_button);
*/

// add the buttons




// Start the spinner for the first time
var spinner = start_Spinner();





// Get the ID of the movie
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
get_similar(movie_ID, 5)

//*********************************************************************









//*********************************************************************
// Get a JSON of similar movies
// Gets called at least once, when the ID returns
function get_similar(movie_ID, limit)
{
	
	var api_key = "5vdj7je2uqr83vvx6rnqb4vh";
	var base_URL = "http://api.rottentomatoes.com/api/public/v1.0/movies/"
	
	
		
	
	var similar_URL = base_URL + movie_ID + "/similar.json?limit=" + limit + "&apikey=" + api_key;

	var xhr = new XMLHttpRequest();
	xhr.open("GET", similar_URL, true);
	xhr.onreadystatechange = function(data)
	{
	    if (xhr.readyState == 4) 
		{
			display_similar(JSON.parse(xhr.responseText));
			
		}
	}

	xhr.send();
	
	
	
}

//*********************************************************************






// Needs to be a different function so it can be called when get_similar's ajax returns
function display_similar(similar_JSON)
{
	movies = similar_JSON.movies
	spinner.stop();
	
	
	if (movies.length === 0)
	{// If there are no similar movies
		inner.innerHTML = "<h3>No Similar Movies Found</h3>"
	} 
	else
	{
		for (mov in movies)
		{			
			inner.innerHTML = inner.innerHTML + "<span class = \"film\">" + "<a href = \"" + movies[mov].links.alternate + "\">" + "<img src = \"" + movies[mov].posters.thumbnail + "\">" + "<div class = \"title\">" + movies[mov].title + "</div>" + "</a>"  + "<span class = \"year\">" + movies[mov].year + "</span>"  + "<span class = \"score\">" + movies[mov].ratings.critics_score + "\%</span>" + "</span>";
			
		}
	}
	
}




function right_button()
{
	
	
}


function display_right_button()
{
	
}


function hide_right_button()
{
	
}


function left_button()
{
	
	
}


function display_left_button()
{
	
}


function hide_left_button()
{
	
}



//*********************************************************************
// Start the spinner. Returns a reference to the spinner so you can stop it. You should use the global spinner var when starting so other functions can stop it, if needed.
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
