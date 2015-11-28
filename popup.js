
var bg = chrome.extension.getBackgroundPage();
var son = [];

function loadIt(url){
	xhttp = new XMLHttpRequest();
	xhttp.open("GET", url, false);
	xhttp.send();
	return xhttp.responseText;
};

function displayResults(){
	var output='';
	var que = document.getElementById('searchterm').value;
	tracks = loadIt("http://api.soundcloud.com/tracks.json?client_id=44c88b31e709231ae8f61adc66908de3&q="+que+"&format=json");
	tracks = '{"songs":'+tracks+'}';
	obj = JSON.parse(tracks);
	output+='<button type="button" id="test1">'+obj.songs[0].title+'</button><br>';
	output+='<button type="button" id="test2">'+obj.songs[1].title+'</button><br>';
	output+='<button type="button" id="test3">'+obj.songs[2].title+'</button><br>';
	output+='<button type="button" id="test4">'+obj.songs[3].title+'</button><br>';
	output+='<button type="button" id="test5">'+obj.songs[4].title+'</button><br>';
	document.getElementById('result').innerHTML = output;

	document.getElementById('test1').onclick = function(){
		bg.st(obj.songs[0].id);
	};


	document.getElementById('test2').onclick = function(){
		bg.st(obj.songs[1].id);
	};

	document.getElementById('test3').onclick = function(){
		bg.st(obj.songs[2].id);
	};

	document.getElementById('test4').onclick = function(){
		bg.st(obj.songs[3].id);
	};

	document.getElementById('test5').onclick = function(){
		bg.st(obj.songs[4].id);
	};



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




