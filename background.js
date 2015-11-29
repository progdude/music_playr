var img="";
var title = "";


function checkPlay(){
	var audio = document.getElementById("myAudio");
	return !audio.paused;
};

function changePic(){
	return img;
};

function changeTitle(){
  return title;
}

function st(id, link, description){
	  var audio = document.getElementById("myAudio");
    audio.src = "http://api.soundcloud.com/tracks/"+id+"/stream?client_id=44c88b31e709231ae8f61adc66908de3";
    audio.play();
    img = link;
    title = description;
};

function sto(){
  var audio = document.getElementById("myAudio");
  audio.pause();
};

function pl(){
  var audio = document.getElementById("myAudio");
  audio.play();
  
};

window.onload = function(){
var audi = document.getElementById("myAudio");
audi.onended = function(){
  img="";
  title="";
};
};



