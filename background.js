


function st(id){
	  var audio = document.getElementById("myAudio");
    audio.src = "http://api.soundcloud.com/tracks/"+id+"/stream?client_id=201b55a1a16e7c0a122d112590b32e4a";
    audio.play();
};

function sto(){
  var audio = document.getElementById("myAudio");
  audio.pause();
};

function pl(){
  var audio = document.getElementById("myAudio");
  audio.play();
};


