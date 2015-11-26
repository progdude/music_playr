
window.onload = function(){
	init();

}


function init(){
	gapi.client.setApiKey("AIzaSyDEKbLqmdvHIH9vb-IemiNaKy0H0M81vKQ")
	gapi.client.load("youtube", "v3", function(){
		
	});

}


var bg = chrome.extension.getBackgroundPage();
var son = [];

function loadIt(url){
	xhttp = new XMLHttpRequest();
	xhttp.open("GET", url, false);
	xhttp.send();
	return xhttp.responseText;
};

function displayResults(){
	
	var que = document.getElementById('searchterm').value;
	  var results = gapi.client.youtube.search.list({
	  	part:"snippet",
	  	maxResults: 5,
	  	q: que
	  });


	results.execute(function(response){
		var r = response.result;
		var output='';

		output+='<button type="button" id="test1">'+r.items[0].snippet.title+'</button><br>';
		output+='<button type="button" id="test2">'+r.items[1].snippet.title+'</button><br>';
		output+='<button type="button" id="test3">'+r.items[2].snippet.title+'</button><br>';
		output+='<button type="button" id="test4">'+r.items[3].snippet.title+'</button><br>';
		output+='<button type="button" id="test5">'+r.items[4].snippet.title+'</button><br>';
		document.getElementById('result').innerHTML = output;


	document.getElementById('test1').onclick = function(){
		bg.st("https://www.youtube.com/embed/"+r.items[0].id.videoId);
	};


	document.getElementById('test2').onclick = function(){
		bg.st("https://www.youtube.com/embed/"+r.items[1].id.videoId);
	};

	document.getElementById('test3').onclick = function(){
		bg.st("https://www.youtube.com/embed/"+r.items[2].id.videoId;
	};

	document.getElementById('test4').onclick = function(){
		bg.st("https://www.youtube.com/embed/"+r.items[3].id.videoId);
	};

	document.getElementById('test5').onclick = function(){
		bg.st("https://www.youtube.com/embed/"+r.items[4].id.videoId);
	};
	})





};

function yes(){
	bg.pl();
};

function no(){
	bg.sto();
};



document.getElementById('search').addEventListener('click', displayResults);
document.getElementById('stop').addEventListener('click', no);
document.getElementById('start').addEventListener('click', yes);





